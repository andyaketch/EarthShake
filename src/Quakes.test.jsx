import { render, screen } from '@testing-library/react'
import Quakes from './Quakes'

const makeQuake = (n) => ({
  id: `q${n}`,
  properties: { mag: 5, place: `Place ${n}`, time: 1700000000000, url: `https://usgs.test/${n}` },
  geometry: { coordinates: [36, -1, 10] },
})

describe('Quakes', () => {
  it('shows a loading message first', () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation(() => new Promise(() => {}))
    render(<Quakes />)
    expect(screen.getByText(/loading earthquake records/i)).toBeInTheDocument()
  })

  it('shows a card for each earthquake', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ features: [makeQuake(1), makeQuake(2)] }),
    })
    render(<Quakes />)
    expect(await screen.findByText('Place 1')).toBeInTheDocument()
    expect(screen.getByText('Place 2')).toBeInTheDocument()
  })

  it('shows an error message when the request fails', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false })
    render(<Quakes />)
    expect(await screen.findByText(/could not load the earthquakes/i)).toBeInTheDocument()
  })
})
