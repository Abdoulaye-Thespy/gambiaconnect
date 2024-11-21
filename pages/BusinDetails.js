import Image from 'next/image'
import { Heart, Share2, Star, MapPin, Clock, DollarSign, ArrowLeft, Camera, Wifi, Coffee, Utensils } from 'lucide-react'
/* import ClientSideInteractions from './ClientSideInteractions'
 */
const images = [
  "/assets/images/listing/listing-grid-10.jpg",
  "/assets/images/listing/listing-grid-11.jpg+2",
  "/assets/images/listing/listing-grid-12.jpg+3",
  "assets/images/listing/listing-grid-9.jpg+4",
]

export default function BusinDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <button className="flex items-center text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span className="text-lg font-medium">Back to Listings</span>
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src={images[0]}
                alt="Destination Image 1"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
{/*               <ClientSideInteractions />
 */}            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    width={33}
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Museum of Islamic Art</h1>
              <div className="mt-2 flex items-center space-x-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="mr-1 h-5 w-5" />
                  <span>Gambia</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Star className="mr-1 h-5 w-5 text-yellow-400" />
                  <span>4.8 (102 Reviews)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center">
                  <DollarSign className="mr-2 h-6 w-6 text-gray-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Price Range</h3>
                    <p className="text-gray-600">$05.00 - $80.00</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-6 w-6 text-gray-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Duration</h3>
                    <p className="text-gray-600">2-3 hours</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-gray-900">Description</h3>
                <p className="text-gray-600">
                  Experience the rich Islamic heritage through this magnificent museum. The Museum of Islamic Art houses one of
                  the world's most comprehensive collections of Islamic art, with items dating from the 7th to the 19th century.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-gray-900">Highlights</h3>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  <li>Guided tours available in multiple languages</li>
                  <li>Interactive exhibits and multimedia presentations</li>
                  <li>Rare manuscripts and calligraphy collections</li>
                  <li>Architectural elements from various Islamic periods</li>
                </ul>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition duration-150 ease-in-out">
                Book Now
              </button>
              <button className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-50 transition duration-150 ease-in-out">
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Camera, label: "Photography Allowed" },
              { icon: Wifi, label: "Free Wi-Fi" },
              { icon: Coffee, label: "Café on Site" },
              { icon: Utensils, label: "Restaurant Nearby" },
            ].map((amenity, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
                <amenity.icon className="h-6 w-6 text-blue-500" />
                <span className="text-gray-700">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Reviews</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((review) => (
              <div key={review} className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Visitor {review}</h4>
                      <p className="text-sm text-gray-500">Visited on March {review}, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">
                  Amazing experience! The museum offers a fascinating journey through Islamic art history. The exhibits are
                  well-curated and the audio guide was very informative.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}