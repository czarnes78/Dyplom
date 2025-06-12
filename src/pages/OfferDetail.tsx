import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { 
  MapPin, Calendar, Users, Star, Clock, Utensils, 
  Car, Building, CheckCircle, MessageCircle, 
  ChevronLeft, ChevronRight, Lock, CreditCard 
} from 'lucide-react';
import { mockOffers } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

const OfferDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState(2);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  const offer = mockOffers.find(o => o.id === id);

  if (!offer) {
    return <Navigate to="/offers" replace />;
  }

  const getMealLabel = (meal: string) => {
    const labels = {
      'BB': 'Śniadania (BB)',
      'HB': 'Śniadania + obiad/kolacja (HB)', 
      'AI': 'All Inclusive',
      'none': 'Bez wyżywienia'
    };
    return labels[meal as keyof typeof labels] || meal;
  };

  const getTripTypeLabel = (type: string) => {
    const labels = {
      'relax': 'Relaks',
      'adventure': 'Przygoda',
      'culture': 'Kultura',
      'family': 'Rodzina'
    };
    return labels[type as keyof typeof labels] || type;
  };

  const totalPrice = offer.price * guests;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === offer.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? offer.images.length - 1 : prev - 1
    );
  };

  const handleBookNow = () => {
    if (!user) {
      // Redirect to login
      window.location.href = '/login';
      return;
    }
    
    if (!selectedDate) {
      alert('Wybierz datę wyjazdu');
      return;
    }

    setShowBookingForm(true);
  };

  const handleBlockAndPay = () => {
    if (!user) {
      window.location.href = '/login';
      return;
    }
    
    if (!selectedDate) {
      alert('Wybierz datę wyjazdu');
      return;
    }

    // Mock blocking reservation for 3 hours
    alert('Oferta została zablokowana na 3 godziny. Możesz dokończyć płatność później.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/offers" className="hover:text-blue-600">Oferty</a>
          <span className="mx-2">/</span>
          <span>{offer.destination}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{offer.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={offer.images[currentImageIndex]}
                  alt={offer.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                
                {offer.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* Image indicators */}
                {offer.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {offer.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  {offer.isLastMinute && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      LAST MINUTE
                    </span>
                  )}
                  {offer.originalPrice && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      -{Math.round((1 - offer.price / offer.originalPrice) * 100)}%
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Offer Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{offer.destination}, {offer.country}</span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {offer.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{offer.rating}</span>
                      <span>({offer.reviewCount} opinii)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{offer.duration} dni</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  {offer.originalPrice && (
                    <div className="text-lg text-gray-400 line-through">
                      {offer.originalPrice.toLocaleString('pl-PL')} zł
                    </div>
                  )}
                  <div className="text-3xl font-bold text-blue-600">
                    {offer.price.toLocaleString('pl-PL')} zł
                  </div>
                  <div className="text-sm text-gray-600">za osobę</div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {offer.description}
              </p>

              {/* Trip Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Utensils className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Wyżywienie</div>
                    <div className="text-sm text-gray-600">{getMealLabel(offer.meals)}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Building className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Zakwaterowanie</div>
                    <div className="text-sm text-gray-600">{offer.accommodation}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Car className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Transport</div>
                    <div className="text-sm text-gray-600">{offer.transport}</div>
                  </div>
                </div>
              </div>

              {/* Trip Type */}
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {getTripTypeLabel(offer.tripType)}
                </span>
              </div>
            </div>

            {/* Itinerary */}
            {offer.itinerary.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Plan podróży</h2>
                <div className="space-y-6">
                  {offer.itinerary.map((day) => (
                    <div key={day.day} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                          {day.day}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900">{day.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-3">{day.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {day.activities.map((activity, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AI Assistant CTA */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Nie wiesz, czy to oferta dla Ciebie?
                  </h3>
                  <p className="text-gray-600">
                    Zapytaj naszego doradcę podróży AI o szczegóły i personalne rekomendacje
                  </p>
                </div>
                <button
                  onClick={() => setShowAIAssistant(true)}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Zapytaj AI</span>
                </button>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Rezerwacja</h3>
              
              {/* Date Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dostępne terminy
                </label>
                <div className="space-y-2">
                  {offer.availableDates.map((date, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(date)}
                      className={`w-full text-left p-3 rounded-lg border transition-colors duration-200 ${
                        selectedDate?.getTime() === date.getTime()
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">
                          {format(date, 'd MMMM yyyy', { locale: pl })}
                        </span>
                        {selectedDate?.getTime() === date.getTime() && (
                          <CheckCircle className="h-5 w-5 text-blue-600" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Guests */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Liczba osób
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'osoba' : num < 5 ? 'osoby' : 'osób'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Summary */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Cena za osobę:</span>
                  <span className="font-medium">{offer.price.toLocaleString('pl-PL')} zł</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Liczba osób:</span>
                  <span className="font-medium">{guests}</span>
                </div>
                <div className="h-px bg-gray-200 my-3"></div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Razem:</span>
                  <span className="text-xl font-bold text-blue-600">
                    {totalPrice.toLocaleString('pl-PL')} zł
                  </span>
                </div>
              </div>

              {/* Booking Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleBookNow}
                  disabled={!selectedDate}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Rezerwuj teraz</span>
                </button>
                
                <button
                  onClick={handleBlockAndPay}
                  disabled={!selectedDate}
                  className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  <Lock className="h-5 w-5" />
                  <span>Zablokuj na 3h</span>
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                * Bezpieczne płatności. Możliwość anulowania do 14 dni przed wyjazdem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Modal */}
      {showAIAssistant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Asystent AI - Doradca Podróży</h3>
                <button
                  onClick={() => setShowAIAssistant(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-blue-800">
                  <strong>AI:</strong> Witaj! Widzę, że interesuje Cię oferta "{offer.title}". 
                  To wspaniały wybór! Czy masz jakieś pytania dotyczące tej wycieczki?
                </p>
              </div>
              <div className="space-y-4">
                <textarea
                  placeholder="Zadaj pytanie o tę ofertę, np. 'Czy ta wycieczka jest odpowiednia dla dzieci?'"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Wyślij pytanie
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferDetail;