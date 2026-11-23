import { render, screen } from '@testing-library/react'
import QuakeCard from './QuakeCard'

const props = {
  mag: 5.43,
  place: '10 km N of Nakuru, Kenya',
  depth: 12,
  time: 1700000000000,
  link: 'https://earthquake.usgs.gov/earthquakes/eventpage/abc',
}

describe('QuakeCard', () => {
  it('shows the place and depth', () => {
    render(<QuakeCard {...props} />)
    expect(screen.getByText('10 km N of Nakuru, Kenya')).toBeInTheDocument()
    expect(screen.getByText('Depth: 12 km')).toBeInTheDocument()
  })

  it('rounds the magnitude to one decimal place', () => {
    render(<QuakeCard {...props} />)
    expect(screen.getByRole('heading', { name: 'Magnitude 5.4' })).toBeInTheDocument()
  })
})
