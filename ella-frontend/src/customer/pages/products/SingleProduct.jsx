import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { product, reviews } from './SingleProductData'
import ProductCarousel from '../../components/carousel/ProductCarousel'
import { LinearProgress, Rating } from '@mui/material'
import ReviewCard from '../../components/card/ReviewCard'
import Card from '../../components/card/Card'
import { useNavigate } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SingleProduct() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const navigate = useNavigate();

  return (
    <div className="bg-white p-5">
      {/* Product Info */}
      <section>
        <div className="pt-6 flex gap-14 p-5">

          {/* Image gallery */}
          <div className="w-[50%] ell-product-carousel">
            <ProductCarousel />
          </div>

          {/* Product info */}
          <div className="">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className='flex gap-3 items-end'>
                <p className="text-3xl tracking-tight text-green-500">{product.price}</p>
                <p className='text-2xl line-through text-gray-400'>$2000</p>
              </div>

              {/* Reviews */}
              <div className="mt-6 flex gap-5">
                <Rating name="read-only" value={3} readOnly />
                <p className='text-gray-500'>2727 Ratings</p>
                <p className='text-gray-500'>437467 Reviews</p>
              </div>

              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

                  <fieldset aria-label="Choose a color" className="mt-4">
                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <Radio
                          key={color.name}
                          value={color}
                          aria-label={color.name}
                          className={({ focus, checked }) =>
                            classNames(
                              color.selectedClass,
                              focus && checked ? 'ring ring-offset-1' : '',
                              !focus && checked ? 'ring-2' : '',
                              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                            )
                          }
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              'h-8 w-8 rounded-full border border-black border-opacity-10'
                            )}
                          />
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                <button
                  onClick={() => {navigate("/cart")}}
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2 bg-primary"
                >
                  Add to bag
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews and ratings */}
      <section className='shadow-sm p-5'>
        <h1 className='py-5 text-2xl font-semibold'>Reviews & Ratings</h1>
        <div className='flex gap-5'>
          <div className='w-[60%] flex flex-col gap-3'>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
          <div className='w-[40%] flex flex-col gap-3'>
            <h2 className='text-lg font-semibold text-gray-700'>Product Ratings</h2>
            <div className='flex gap-3'>
              <Rating value="4" readOnly />
              <p className='text-gray-400'>493049 Ratings</p>
            </div>
            <div className='flex gap-3 items-center'>
              <p className='text-gray-800 w-20'>Excellent</p>
              <LinearProgress className='w-56' value={70} variant='determinate' color='success' />
              <p className='text-gray-400'>3333</p>
            </div>
            <div className='flex gap-3 items-center'>
              <p className='text-gray-800 w-20'>Very Good</p>
              <LinearProgress className='w-56' value={60} variant='determinate' color='success' />
              <p className='text-gray-400'>3843</p>
            </div>
            <div className='flex gap-3 items-center'>
              <p className='text-gray-800 w-20'>Average</p>
              <LinearProgress className='w-56' value={40} variant='determinate' color='success' />
              <p className='text-gray-400'>4433</p>
            </div>
            <div className='flex gap-3 items-center'>
              <p className='text-gray-800 w-20'>Poor</p>
              <LinearProgress className='w-56' value={20} variant='determinate' color='success' />
              <p className='text-gray-400'>3393</p>
            </div>
          </div>
        </div>
      </section>

      {/* Similar products */}
      <section className='p-5'>
        <h1 className='py-5 text-2xl font-semibold'>Similar Products</h1>
        <div className='flex flex-wrap gap-5 justify-center'>
          {
            <>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </>
          }
        </div>
      </section>
    </div>
  )
}
