'use client';
import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useVendors } from '@/context/VendorContext';
import { Navigation2Off, Utensils, ShieldCheck, Heart, MapPin, X, RefreshCw, ChevronUp, ChevronDown, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Vendor } from '@/types/vendor';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription } from '@/components/ui/alert';
import dynamic from 'next/dynamic';

// Dynamically import the map component with no SSR
const MapWithNoSSR = dynamic(
  () => import('./MapComponent'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex flex-col items-center justify-center h-full bg-blue-50 rounded-lg">
        <RefreshCw className="animate-spin text-gray-400 mb-2" size={32} />
        <p className="text-gray-500">Loading map...</p>
      </div>
    )
  }
);

export const MapView = () => {
  const { vendors, radius, setRadius, userLocation, setUserLocation } = useVendors();
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [customRadius, setCustomRadius] = useState<number>(radius);
  const [radiusType, setRadiusType] = useState<'5km' | '10km' | 'custom'>('5km');
  const [showMap, setShowMap] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFoodItems, setSelectedFoodItems] = useState<string[]>([]);
  const [showFoodOptions, setShowFoodOptions] = useState<boolean>(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [radiusInputValue, setRadiusInputValue] = useState<string>(customRadius.toString());
  const [mapHeight, setMapHeight] = useState<string>("h-64");
  const [isFiltersVisible, setIsFiltersVisible] = useState<boolean>(false);
  const [bottomPanelHeight, setBottomPanelHeight] = useState<string>("h-72");
  const [bottomPanelState, setBottomPanelState] = useState<'collapsed' | 'partial' | 'expanded'>('partial');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startDragY, setStartDragY] = useState<number>(0);
  const [dragOffset, setDragOffset] = useState<number>(0);

  const panelRef = useRef<HTMLDivElement>(null);
  const dragHandleRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const { vendorId } = useParams();
  
  // Get user location
  const requestLocationPermission = useCallback(() => {
    setLocationError(null);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.longitude, position.coords.latitude]);
      },
      (error) => {
        console.error('Location error:', error);
        setLocationError("We couldn't access your location. Using default location.");
        // Default to Kolkata
        setUserLocation([88.3639, 22.5726]);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  }, [setUserLocation]);

  // Initialize component
  useEffect(() => {
    requestLocationPermission();
    
    // Get vendorId from URL if present
    if (vendorId) {
      const vendor = vendors.find(v => v.id === Number(vendorId));
      if (vendor) {
        setSelectedVendor(vendor);
      }
    }
    
    // Set different default panel states for mobile vs desktop
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile
        setMapHeight("h-64");
        setBottomPanelState('partial');
        updateBottomPanelHeight('partial');
      } else {
        // Desktop
        setMapHeight("h-72");
        setBottomPanelState('partial');
        updateBottomPanelHeight('partial');
      }
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [vendorId, vendors, requestLocationPermission]);

  // Refresh map when location or radius changes
  useEffect(() => {
    if (userLocation) {
      setShowMap(false);
      // Short timeout to ensure unmount happens before remount
      setTimeout(() => setShowMap(true), 10);
    }
  }, [userLocation, radius]);
  
  // Handle drag start
  const handleDragStart = (e: MouseEvent | TouchEvent) => {
    setIsDragging(true);
    if (e instanceof MouseEvent) {
      setStartDragY(e.clientY);
    } else if (e instanceof TouchEvent) {
      setStartDragY(e.touches[0].clientY);
    }
    document.body.style.userSelect = 'none';
  };

  // Handle drag
  const handleDrag = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    
    let clientY: number;
    if (e instanceof MouseEvent) {
      clientY = e.clientY;
    } else if (e instanceof TouchEvent) {
      clientY = e.touches[0].clientY;
    } else {
      return;
    }
    if (!clientY) return;
    
    const deltaY = startDragY - clientY;
    setDragOffset(deltaY);
    
    // Apply direct style for smoother dragging
    if (panelRef.current) {
      const viewportHeight = window.innerHeight;
      const panelHeight = panelRef.current.offsetHeight;
      const maxOffset = viewportHeight - 100; // Keep at least 100px from top
      const newHeight = Math.min(Math.max(panelHeight + deltaY, 120), maxOffset);
      
      panelRef.current.style.height = `${newHeight}px`;
    }
  };

  // Handle drag end
  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    document.body.style.userSelect = '';
    
    if (panelRef.current) {
      const viewportHeight = window.innerHeight;
      const panelHeight = panelRef.current.offsetHeight;
      const panelRatio = panelHeight / viewportHeight;
      
      // Determine the new state based on the panel height ratio
      let newState: 'collapsed' | 'partial' | 'expanded';
      
      if (panelRatio < 0.3) {
        newState = 'collapsed';
      } else if (panelRatio > 0.7) {
        newState = 'expanded';
      } else {
        newState = 'partial';
      }
      
      setBottomPanelState(newState);
      updateBottomPanelHeight(newState);
    }
    
    setDragOffset(0);
  };

  // Update bottom panel height based on state
  const updateBottomPanelHeight = (state: 'collapsed' | 'partial' | 'expanded') => {
    const isMobile = window.innerWidth < 768;
    
    if (state === 'collapsed') {
      setBottomPanelHeight(isMobile ? "h-24" : "h-32");
    } else if (state === 'partial') {
      setBottomPanelHeight(isMobile ? "h-72" : "h-96");
    } else {
      // Expanded
      setBottomPanelHeight("h-full");
    }
  };

  // Toggle bottom panel state
  const togglePanelState = () => {
      const nextState: Record<'collapsed' | 'partial' | 'expanded', 'collapsed' | 'partial' | 'expanded'> = {
        'collapsed': 'partial',
        'partial': 'expanded',
        'expanded': 'collapsed'
      };
      
      const newState = nextState[bottomPanelState];
      setBottomPanelState(newState);
      updateBottomPanelHeight(newState);
    };
  
  // Handle radius type change
  const handleRadiusTypeChange = (value: string) => {
    setRadiusType(value as '5km' | '10km' | 'custom');
    
    if (value === '5km') {
      setRadius(5);
      setCustomRadius(5);
      setRadiusInputValue('5');
    } else if (value === '10km') {
      setRadius(10);
      setCustomRadius(10);
      setRadiusInputValue('10');
    } else {
      setRadius(customRadius);
    }
  };
  
  // Handle custom radius change from slider
  const handleCustomRadiusChange = (value: number[]) => {
    const newRadius = value[0];
    setCustomRadius(newRadius);
    setRadiusInputValue(newRadius.toString());
    if (radiusType === 'custom') {
      setRadius(newRadius);
    }
  };

  // Handle radius input change
  const handleRadiusInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadiusInputValue(e.target.value);
  };

  // Apply custom radius input
  const applyCustomRadiusInput = () => {
    const newRadius = parseFloat(radiusInputValue);
    
    if (!isNaN(newRadius) && newRadius >= 1 ) {
      setCustomRadius(newRadius);
      if (radiusType === 'custom') {
        setRadius(newRadius);
      } else {
        setRadiusType('custom');
        setRadius(newRadius);
      }
    } else {
      // Reset to current custom radius if invalid input
      setRadiusInputValue(customRadius.toString());
    }
  };

  // Handle input blur
  const handleRadiusInputBlur = () => {
    applyCustomRadiusInput();
  };

  // Handle key press
  const handleRadiusInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      applyCustomRadiusInput();
    }
  };

  // Calculate distance between two points
  const calculateDistance = useCallback((userLat: number, userLng: number, vendorLat: number, vendorLng: number) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (vendorLat - userLat) * (Math.PI / 180);
    const dLng = (vendorLng - userLng) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(userLat * (Math.PI / 180)) * Math.cos(vendorLat * (Math.PI / 180)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  }, []);
  
  // Get vendors within the radius and matching search criteria
  const filteredVendors = useMemo(() => {
    if (!userLocation) return [];
    
    const [userLng, userLat] = userLocation;
    
    return vendors.filter(vendor => {
      // Check distance
      const [vendorLng, vendorLat] = vendor.location.coordinates;
      const distance = calculateDistance(userLat, userLng, vendorLat, vendorLng);
      
      // Apply radius filter
      if (distance > radius) return false;
      
      // Apply search query filter
      if (searchQuery) {
        const matchesName = vendor.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFoodItems = vendor.foodItems.some(item => 
          item.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        if (!matchesName && !matchesFoodItems) return false;
      }
      
      // Apply selected food items filter
      if (selectedFoodItems.length > 0) {
        const hasSelectedFoodItem = selectedFoodItems.some(item => 
          vendor.foodItems.includes(item)
        );
        
        if (!hasSelectedFoodItem) return false;
      }
      
      return true;
    }).sort((a, b) => {
      // Sort by distance
      const [aLng, aLat] = a.location.coordinates;
      const [bLng, bLat] = b.location.coordinates;
      
      const distanceA = calculateDistance(userLat, userLng, aLat, aLng);
      const distanceB = calculateDistance(userLat, userLng, bLat, bLng);
      
      return distanceA - distanceB;
    });
  }, [vendors, userLocation, radius, searchQuery, selectedFoodItems, calculateDistance]);

  // Get all unique food items across vendors
  const allFoodItems = useMemo(() => {
    const foodItemSet = new Set<string>();
    vendors.forEach(vendor => {
      vendor.foodItems.forEach(item => {
        foodItemSet.add(item);
      });
    });
    return Array.from(foodItemSet);
  }, [vendors]);

  // Get filtered food options based on search
  const filteredFoodOptions = useMemo(() => {
    return allFoodItems
      .filter(item => 
        item.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !selectedFoodItems.includes(item)
      )
      .sort();
  }, [allFoodItems, searchQuery, selectedFoodItems]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowFoodOptions(e.target.value !== '');
  };

  // Select a food item
  const selectFoodItem = (item: string) => {
    setSelectedFoodItems(prev => [...prev, item]);
    setSearchQuery('');
    setShowFoodOptions(false);
  };

  // Remove a selected food item
  const removeFoodItem = (item: string) => {
    setSelectedFoodItems(prev => prev.filter(i => i !== item));
  };

  // Navigate to vendor detail page
  const goToVendorDetail = (vendor: Vendor) => {
    router.push(`/vendors/${vendor.id}`);
  };

  // Set up drag event listeners
  useEffect(() => {
    const dragHandle = dragHandleRef.current;
    
    if (dragHandle) {
      const touchStartHandler = (e: any) => handleDragStart(e);
      const touchMoveHandler = (e: any) => handleDrag(e);
      const touchEndHandler = () => handleDragEnd();
      
      const mouseDownHandler = (e: any) => handleDragStart(e);
      const mouseMoveHandler = (e: any) => handleDrag(e);
      const mouseUpHandler = () => handleDragEnd();
      
      // Touch events
      dragHandle.addEventListener('touchstart', touchStartHandler, { passive: false });
      window.addEventListener('touchmove', touchMoveHandler, { passive: false });
      window.addEventListener('touchend', touchEndHandler);
      
      // Mouse events
      dragHandle.addEventListener('mousedown', mouseDownHandler);
      window.addEventListener('mousemove', mouseMoveHandler);
      window.addEventListener('mouseup', mouseUpHandler);
      
      return () => {
        // Touch events
        dragHandle.removeEventListener('touchstart', touchStartHandler);
        window.removeEventListener('touchmove', touchMoveHandler);
        window.removeEventListener('touchend', touchEndHandler);
        
        // Mouse events
        dragHandle.removeEventListener('mousedown', mouseDownHandler);
        window.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('mouseup', mouseUpHandler);
      };
    }
  }, [isDragging, startDragY]);

  return (
    <div className="h-full flex flex-col relative">
      {/* Location error alert */}
      {locationError && (
        <Alert className="mb-4">
          <AlertDescription>{locationError}</AlertDescription>
        </Alert>
      )}

      {/* Map Container - Takes full height */}
      <div className="absolute inset-0 z-0">
        {!userLocation ? (
          <div className="flex flex-col items-center justify-center h-full bg-blue-50">
            <Navigation2Off size={32} className="text-gray-400 mb-2" />
            <p className="text-gray-500">Location not available</p>
          </div>
        ) : (
          showMap && (
            <MapWithNoSSR 
              userLocation={userLocation}
              radius={radius}
              vendorsInRadius={filteredVendors}
              selectedVendor={selectedVendor}
              onVendorSelect={setSelectedVendor}
            />
          )
        )}
      </div>

      {/* Top Controls */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Find Street Food</h2>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={requestLocationPermission}
              className="text-[#FF5722]"
            >
              <MapPin size={16} className="mr-1" />
              Update Location
            </Button>
          </div>
          
          {/* Search input */}
          <div className="relative mt-3">
            <Input
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search vendors or food items..."
              className="w-full"
            />
            
            {/* Food item dropdown */}
            {showFoodOptions && filteredFoodOptions.length > 0 && (
              <div className="absolute z-10 w-full mt-1 max-h-40 overflow-y-auto bg-white border rounded-md shadow-lg">
                <ScrollArea className="max-h-40">
                  {filteredFoodOptions.map((item, index) => (
                    <div 
                      key={index} 
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => selectFoodItem(item)}
                    >
                      {item}
                    </div>
                  ))}
                </ScrollArea>
              </div>
            )}
          </div>
          
          {/* Selected food items */}
          {selectedFoodItems.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedFoodItems.map((item, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {item}
                  <button onClick={() => removeFoodItem(item)} className="text-gray-500 hover:text-gray-700">
                    <X size={14} />
                  </button>
                </Badge>
              ))}
            </div>
          )}
          
          {/* Filters toggle */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsFiltersVisible(!isFiltersVisible)}
            className="mt-2 text-[#FF5722] w-full flex justify-between"
          >
            <span>Radius & Filters</span>
            {isFiltersVisible ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>
          
          {/* Expanded filters */}
          {isFiltersVisible && (
            <div className="mt-2 pt-2 border-t">
              <h3 className="text-sm font-medium mb-2">Search Radius</h3>
              <RadioGroup 
                value={radiusType} 
                onValueChange={handleRadiusTypeChange}
                className="flex space-x-4 mb-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5km" id="r1" />
                  <Label htmlFor="r1">5km</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="10km" id="r2" />
                  <Label htmlFor="r2">10km</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="custom" id="r3" />
                  <Label htmlFor="r3">Custom</Label>
                </div>
              </RadioGroup>
              
              {radiusType === 'custom' && (
                <div className="mb-3">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>1km</span>
                    <span>{customRadius}km</span>
                    <span>100km</span>
                  </div>
                  <Slider
                    value={[customRadius]}
                    min={1}
                    max={100}
                    step={1}
                    onValueChange={handleCustomRadiusChange}
                    className="w-full mb-4"
                  />
                  
                  {/* Custom radius input field */}
                  <div className="flex items-center space-x-2 mb-2">
                    <Label htmlFor="custom-radius" className="text-sm whitespace-nowrap">Set exact radius:</Label>
                    <div className="flex w-32">
                      <Input
                        id="custom-radius"
                        type="number"
                        min="1"
                        max="1000"
                        step="0.1"
                        value={radiusInputValue}
                        onChange={handleRadiusInputChange}
                        onBlur={handleRadiusInputBlur}
                        onKeyPress={handleRadiusInputKeyPress}
                        className="rounded-r-none"
                      />
                      <div className="flex items-center justify-center bg-muted px-3 rounded-r-md border border-l-0 border-input">
                        <span className="text-sm">km</span>
                      </div>
                    </div>
                    <Button 
                      size="sm"
                      variant="secondary"
                      onClick={applyCustomRadiusInput}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              )}
              
              <div className="text-sm text-muted-foreground">
                Showing {filteredVendors.length} vendors within {radius}km
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom draggable panel */}
      <div 
        ref={panelRef}
        className={`absolute bottom-0 left-0 right-0 z-10 bg-white rounded-t-xl shadow-lg transition-all duration-300 ease-out ${bottomPanelHeight}`}
        style={{ 
          overflowY: 'hidden',
          transition: isDragging ? 'none' : 'height 0.3s ease-out'
        }}
      >
        {/* Drag handle */}
        <div 
          ref={dragHandleRef}
          className="h-8 w-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => handleDragStart(e as unknown as MouseEvent)}
          onTouchStart={(e) => handleDragStart(e as unknown as TouchEvent)}
        >
          <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
          
          {/* Panel state toggle button */}
          <button 
            className="absolute right-4 top-2 p-1 text-gray-500 hover:bg-gray-100 rounded-full"
            onClick={togglePanelState}
          >
            {bottomPanelState === 'expanded' ? (
              <Minimize2 size={18} />
            ) : bottomPanelState === 'collapsed' ? (
              <Maximize2 size={18} />
            ) : (
              <ChevronUp size={18} />
            )}
          </button>
        </div>
        
        {/* Panel content */}
        <div className="h-full overflow-hidden flex flex-col">
          {/* Selected vendor card */}
          {selectedVendor && (
            <Card className="mx-4 mb-4 border-none shadow-none">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={selectedVendor.photoUrl} 
                      alt={selectedVendor.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{selectedVendor.name}</h3>
                    <div className="text-sm text-muted-foreground mt-1">
                      {selectedVendor.foodItems.slice(0, 3).join(", ")}
                      {selectedVendor.foodItems.length > 3 && "…"}
                    </div>
                    <div className="flex text-xs space-x-3 mt-2">
                      <span className="flex items-center">
                        <Utensils size={12} className="mr-1 text-[#FF5722]" />
                        {selectedVendor.tasteRating}
                      </span>
                      <span className="flex items-center">
                        <ShieldCheck size={12} className="mr-1 text-[#FF5722]" />
                        {selectedVendor.hygieneRating}
                      </span>
                      <span className="flex items-center">
                        <Heart size={12} className="mr-1 text-[#FF5722]" />
                        {selectedVendor.hospitalityRating}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button 
                      size="sm" 
                      className="bg-[#FF5722] hover:bg-[#FF5722]/90"
                      onClick={() => goToVendorDetail(selectedVendor)}
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${selectedVendor.location.coordinates[1]},${selectedVendor.location.coordinates[0]}`, '_blank')}
                    >
                      Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Vendor list */}
          <div className="px-4 flex-1 overflow-hidden">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg">Nearby Vendors ({filteredVendors.length})</h3>
              <Badge variant="outline">{radius}km radius</Badge>
            </div>
            
            <ScrollArea className="h-[calc(100%-2rem)]">
              <div className="grid grid-cols-1 gap-3 pr-2 pb-4">
                {filteredVendors.length === 0 ? (
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <p className="text-muted-foreground">No vendors found within {radius}km</p>
                    {(searchQuery || selectedFoodItems.length > 0) && (
                      <Button 
                        variant="link" 
                        className="mt-2"
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedFoodItems([]);
                        }}
                      >
                        Clear filters
                      </Button>
                    )}
                  </div>
                ) : (
                  filteredVendors.map(vendor => {
                    // Calculate distance if we have user location
                    let distanceText = '';
                    if (userLocation) {
                      const [userLng, userLat] = userLocation;
                      const [vendorLng, vendorLat] = vendor.location.coordinates;
                      const distance = calculateDistance(userLat, userLng, vendorLat, vendorLng);
                      distanceText = `${distance.toFixed(1)}km`;
                    }
                    
                    return (
                      <Card 
                        key={vendor.id} 
                        className={`overflow-hidden cursor-pointer transition-all hover:border-[#FF5722]/50 ${
                          selectedVendor?.id === vendor.id ? 'border-2 border-[#FF5722]' : ''
                        }`}
                        onClick={() => setSelectedVendor(vendor)}
                      >
                        <div className="flex h-24">
                          <div className="w-24 h-full">
                            <img 
                              src={vendor.photoUrl} 
                              alt={vendor.name} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <div className="flex-1 p-3">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium text-sm">{vendor.name}</h4>
                              {distanceText && (
                                <Badge variant="outline" className="text-xs">{distanceText}</Badge>
                              )}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1 line-clamp-1">
                              {vendor.foodItems.join(", ")}
                            </div>
                            <div className="flex text-xs space-x-3 mt-2">
                              <span className="flex items-center">
                                <Utensils size={12} className="mr-1 text-[#FF5722]" />
                                {vendor.tasteRating}
                              </span>
                              <span className="flex items-center">
                                <ShieldCheck size={12} className="mr-1 text-[#FF5722]" />
                                {vendor.hygieneRating}
                              </span>
                              <span className="flex items-center">
                                <Heart size={12} className="mr-1 text-[#FF5722]" />
                                {vendor.hospitalityRating}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                  })
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};
