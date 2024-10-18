import React from 'react'
import Card from './Card'
import './CardBox.css'

export default function CardBox() {
  const items =  [
    {
      'img_url': 'https://rukminim2.flixcart.com/flap/200/200/image/24ed491dc3ff9e8a.jpg?q=70',
      'name': 'Noise Smartwatches',
      'price': 'From ₹1,099',
      'other': 'Sale Price Live!'
    },
    {
      'img_url': "https://rukminim2.flixcart.com/image/200/200/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=70",
      'name': 'Best Truewireless Headphones',
      'price': 'Grab Now',
      'other': 'boAt, Oneplus & more'
    },
    {
      'img_url': 'https://rukminim2.flixcart.com/image/200/200/xif0q/camera/x/r/t/na-smart-hd-indoor-wifi-magnet-night-vision-camera-365cam-original-imah5f882smctfb5.jpeg?q=70',
      'name': 'Top Mirrorless Cameras',
      'price': 'Shop Now!',
      'other': 'Canon, Sony, Nikon'
    },
  ]
  return (
    <div className='card-box'>
        {
          items.map(function(item) {
            return (
              <Card
                name={item.name}
                price={item.price}
                other={item.other}
                img_url={item.img_url}
              />
            )
          })
        }
    </div>
  )
}
