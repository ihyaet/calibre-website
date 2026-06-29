export interface Product {
  id: string;
  name: string;
  price: number | null;
  priceLabel: string;
  description: string;
  render: string;
  thumb: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "calibre-01",
    name: "Calibre-01 Standard",
    price: 99,
    priceLabel: "[ $99 ]",
    description: "The essential Calibre. Full LCD strip, 75% TKL layout, tactile switches.",
    render: "/renders/calibre-01.jpg",
    thumb: "/renders/calibre-01-thumb.jpg",
  },
  {
    id: "calibre-02",
    name: "Calibre-02 Pro",
    price: null,
    priceLabel: "[ TBD ]",
    description: "Enhanced connectivity, premium aluminum case. Coming soon.",
    render: "/renders/calibre-02.jpg",
    thumb: "/renders/calibre-02-thumb.jpg",
  },
  {
    id: "calibre-03",
    name: "Calibre-03 Studio",
    price: null,
    priceLabel: "[ TBD ]",
    description: "Built for audio and video professionals. Extended LCD with waveform mode.",
    render: "/renders/calibre-03.jpg",
    thumb: "/renders/calibre-03-thumb.jpg",
  },
  {
    id: "calibre-04",
    name: "Calibre-04 Wireless",
    price: null,
    priceLabel: "[ TBD ]",
    description: "Full wireless freedom, 6-week battery. The untethered Calibre.",
    render: "/renders/calibre-04.jpg",
    thumb: "/renders/calibre-04-thumb.jpg",
  },
];
