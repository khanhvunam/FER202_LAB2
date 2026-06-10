import Carousel from 'react-bootstrap/Carousel'

const promotions = [
  {
    id: 1,
    image:
      'images/banner1.jpg',
    title: 'Summer Style Sale',
    description: 'Refresh your wardrobe with light layers, bold colors, and up to 40% off selected looks.',
  },
  {
    id: 2,
    image:
      'images/banner2.jpg',
    title: 'New Arrivals',
    description: 'Discover fresh fashion picks made for everyday comfort and confident street style.',
  },
  {
    id: 3,
    image:
      'images/banner3.jpg',
    title: 'Weekend Essentials',
    description: 'Shop versatile outfits designed to move from casual plans to evening moments.',
  },
]

function Banner() {
  return (
    <section className="promotion-banner" id="home">
      <Carousel controls indicators interval={3000} pause="hover" fade>
        {promotions.map((promotion) => (
          <Carousel.Item key={promotion.id}>
            <img
              className="promotion-image"
              src={promotion.image}
              alt={promotion.title}
            />
            <Carousel.Caption className="promotion-caption">
              <h1>{promotion.title}</h1>
              <p>{promotion.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  )
}

export default Banner
