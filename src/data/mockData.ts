import { Offer, Reservation } from '../types';

export const mockOffers: Offer[] = [
  {
    id: '1',
    title: 'Greckie Wakacje na Krecie',
    description: 'Odkryj piękno starożytnej kultury i relaksuj się na wspaniałych plażach Krety. Nasz hotel położony jest zaledwie 50 metrów od morza, oferując idealne warunki do wypoczynku.',
    shortDescription: 'Relaks na pięknych plażach Krety z możliwością zwiedzania zabytków',
    destination: 'Kreta',
    country: 'Grecja',
    duration: 7,
    price: 2499,
    originalPrice: 2999,
    images: [
      'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg',
      'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg',
      'https://images.pexels.com/photos/3566135/pexels-photo-3566135.jpeg'
    ],
    meals: 'AI',
    tripType: 'relax',
    season: 'summer',
    isLastMinute: false,
    availableDates: [
      new Date('2024-06-15'),
      new Date('2024-07-01'),
      new Date('2024-07-15'),
      new Date('2024-08-01')
    ],
    itinerary: [
      {
        day: 1,
        title: 'Przyjazd i zameldowanie',
        description: 'Transfer z lotniska, zameldowanie w hotelu, kolacja powitalna',
        activities: ['Transfer z lotniska', 'Zameldowanie w hotelu', 'Kolacja powitalna', 'Spacer po okolicy']
      },
      {
        day: 2,
        title: 'Zwiedzanie Heraklionu',
        description: 'Wycieczka do stolicy Krety z przewodnikiem',
        activities: ['Pałac Knossos', 'Muzeum Archeologiczne', 'Stare miasto Heraklionu', 'Lokalna taverna']
      },
      {
        day: 3,
        title: 'Dzień na plaży',
        description: 'Relaks na hotelowej plaży, zajęcia wodne',
        activities: ['Plażowanie', 'Sporty wodne', 'Masaż SPA', 'Wieczorna animacja']
      }
    ],
    accommodation: 'Hotel 4* all inclusive',
    transport: 'Samolot + transfer',
    rating: 4.5,
    reviewCount: 127,
    createdAt: new Date('2024-01-01')
  },
  {
    id: '2',
    title: 'Przygoda w Tatrach',
    description: 'Aktywny wypoczynek w polskich górach. Trekking, wspinaczka i odkrywanie najpiękniejszych szlaków Tatr.',
    shortDescription: 'Aktywny wypoczynek w polskich górach z przewodnikiem',
    destination: 'Zakopane',
    country: 'Polska',
    duration: 5,
    price: 899,
    images: [
      'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
      'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg',
      'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg'
    ],
    meals: 'HB',
    tripType: 'adventure',
    season: 'summer',
    isLastMinute: true,
    availableDates: [
      new Date('2024-05-20'),
      new Date('2024-06-10'),
      new Date('2024-09-15')
    ],
    itinerary: [
      {
        day: 1,
        title: 'Przyjazd do Zakopanego',
        description: 'Zameldowanie w hotelu, spacer po Krupówkach',
        activities: ['Zameldowanie', 'Spacer po Krupówkach', 'Kolacja regionalna']
      },
      {
        day: 2,
        title: 'Morskie Oko',
        description: 'Wycieczka do najsłynniejszego jeziora w Tatrach',
        activities: ['Trekking do Morskiego Oka', 'Lunch w górach', 'Sesja fotograficzna']
      }
    ],
    accommodation: 'Hotel 3* w centrum Zakopanego',
    transport: 'Autokar',
    rating: 4.8,
    reviewCount: 89,
    createdAt: new Date('2024-01-15')
  },
  {
    id: '3',
    title: 'Kultura i Historia Rzymu',
    description: 'Poznaj wieczne miasto i jego niesamowitą historię. Zwiedzanie najważniejszych zabytków z przewodnikiem.',
    shortDescription: 'Zwiedzanie Rzymu z przewodnikiem, zabytki i kultura',
    destination: 'Rzym',
    country: 'Włochy',
    duration: 4,
    price: 1599,
    images: [
      'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
      'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg',
      'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg'
    ],
    meals: 'BB',
    tripType: 'culture',
    season: 'spring',
    isLastMinute: false,
    availableDates: [
      new Date('2024-04-10'),
      new Date('2024-05-05'),
      new Date('2024-10-20')
    ],
    itinerary: [
      {
        day: 1,
        title: 'Koloseum i Forum Romanum',
        description: 'Zwiedzanie najsłynniejszych zabytków starożytnego Rzymu',
        activities: ['Koloseum', 'Forum Romanum', 'Wzgórze Palatyn', 'Lunch w rzymskiej trattorii']
      }
    ],
    accommodation: 'Hotel 4* w centrum miasta',
    transport: 'Samolot',
    rating: 4.7,
    reviewCount: 156,
    createdAt: new Date('2024-01-20')
  },
  {
    id: '4',
    title: 'Rodzinne Wakacje w Chorwacji',
    description: 'Idealne wakacje dla całej rodziny nad Adriatykiem. Piękne plaże, czysta woda i mnóstwo atrakcji dla dzieci.',
    shortDescription: 'Wakacje nad Adriatykiem dla całej rodziny',
    destination: 'Makarska',
    country: 'Chorwacja',
    duration: 10,
    price: 3299,
    images: [
      'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg',
      'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg',
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg'
    ],
    meals: 'HB',
    tripType: 'family',
    season: 'summer',
    isLastMinute: false,
    availableDates: [
      new Date('2024-07-10'),
      new Date('2024-08-15'),
      new Date('2024-09-01')
    ],
    itinerary: [
      {
        day: 1,
        title: 'Przyjazd i relaks',
        description: 'Transfer, zameldowanie, pierwszy dzień na plaży',
        activities: ['Transfer', 'Zameldowanie', 'Plaża', 'Mini disco dla dzieci']
      }
    ],
    accommodation: 'Resort 4* z basenem dla dzieci',
    transport: 'Autokar',
    rating: 4.6,
    reviewCount: 203,
    createdAt: new Date('2024-02-01')
  },
  {
    id: '5',
    title: 'Last Minute Egipt - Hurghada',
    description: 'Niesamowita oferta last minute do Egiptu! Słońce, plaża i rafa koralowa w atrakcyjnej cenie.',
    shortDescription: 'Last minute do Egiptu - słońce, plaża, nurkowanie',
    destination: 'Hurghada',
    country: 'Egipt',
    duration: 7,
    price: 1899,
    originalPrice: 2599,
    images: [
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
      'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg',
      'https://images.pexels.com/photos/3566135/pexels-photo-3566135.jpeg'
    ],
    meals: 'AI',
    tripType: 'relax',
    season: 'winter',
    isLastMinute: true,
    availableDates: [
      new Date('2024-03-20'),
      new Date('2024-04-05')
    ],
    itinerary: [
      {
        day: 1,
        title: 'Przyjazd do Hurghady',
        description: 'Transfer z lotniska, zameldowanie w hotelu',
        activities: ['Transfer z lotniska', 'Zameldowanie', 'Kolacja', 'Spacer po hotelu']
      }
    ],
    accommodation: 'Hotel 5* all inclusive nad morzem',
    transport: 'Samolot + transfer',
    rating: 4.4,
    reviewCount: 92,
    createdAt: new Date('2024-02-15')
  }
];

export const mockReservations: Reservation[] = [
  {
    id: '1',
    userId: '2',
    offerId: '1',
    status: 'confirmed',
    guests: 2,
    totalPrice: 4998,
    departureDate: new Date('2024-07-01'),
    createdAt: new Date('2024-02-20'),
    paymentDeadline: new Date('2024-06-01')
  },
  {
    id: '2',
    userId: '2',
    offerId: '2',
    status: 'blocked',
    guests: 4,
    totalPrice: 3596,
    departureDate: new Date('2024-06-10'),
    createdAt: new Date('2024-03-01'),
    blockedUntil: new Date(Date.now() + 2 * 60 * 60 * 1000) // 2 hours from now
  }
];