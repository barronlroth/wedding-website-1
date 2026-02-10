import { NavItem, TimelineEvent, Hotel } from './types';

export const WEDDING_DATE = "October 3, 2026";
export const COUPLE_NAME = "Barron & Nina";
export const VENUE_NAME = "Villa Woodbine";
export const VENUE_ADDRESS = "2167 S Bayshore Dr, Miami, FL 33133";
export const LOCATION = "Coconut Grove, Miami";

// External service URLs
export const WITHJOY_URL = "https://withjoy.com/barron-and-nina";
export const WITHJOY_RSVP_URL = "https://withjoy.com/barron-and-nina/rsvp";
export const ZOLA_REGISTRY_URL = "https://www.zola.com/registry/barronandnina"; // TODO: Set up Zola account

export const NAV_ITEMS: NavItem[] = [
  { label: "Our Story", href: "#story" },
  { label: "The Wedding", href: "#details" },
  { label: "Travel", href: "#travel" },
  // HIDDEN: { label: "Registry", href: "#registry" },
  // HIDDEN: { label: "RSVP", href: "#rsvp" },
];

export const TIMELINE: TimelineEvent[] = [
  {
    time: "5:00 PM",
    title: "The Ceremony",
    description: "Please arrive by 4:30 PM. The ceremony will be held in the garden beneath the oak trees.",
    icon: "Heart"
  },
  {
    time: "6:00 PM",
    title: "Cocktail Hour",
    description: "Enjoy signature cocktails and hors d'oeuvres in the courtyard accompanied by Spanish guitar.",
    icon: "Martini"
  },
  {
    time: "7:30 PM",
    title: "Dinner & Dancing",
    description: "Join us for a seated dinner followed by dancing under the stars.",
    icon: "Music"
  },
  {
    time: "11:00 PM",
    title: "After Party",
    description: "For those who want to keep the celebration going.",
    icon: "Moon"
  }
];

export const HOTELS: Hotel[] = [
  {
    name: "The Ritz-Carlton Coconut Grove",
    description: "Luxury hotel just minutes from the venue. Use code 'ROTHWED' for our block rate.",
    link: "https://www.ritzcarlton.com",
    priceRange: "$$$$"
  },
  {
    name: "Mr. C Miami - Coconut Grove",
    description: "A modern boutique hotel with stunning bay views and Italian glamour.",
    link: "https://www.mrchotels.com",
    priceRange: "$$$"
  },
  {
    name: "Mayfair House Hotel & Garden",
    description: "Unique architecture and lush gardens in the heart of the Grove.",
    link: "https://www.mayfairhousemiami.com",
    priceRange: "$$$"
  }
];

export const SYSTEM_INSTRUCTION = `
You are the Wedding Concierge for Barron and Nina Roth.
Wedding Date: ${WEDDING_DATE}.
Venue: ${VENUE_NAME}, ${VENUE_ADDRESS}.
Location: ${LOCATION}.
Dress Code: Tropical Black Tie. (Men: Tuxedos, lighter fabrics acceptable. Women: Long gowns, tropical prints/colors encouraged).
Kids Policy: We love your little ones, but this is an adults-only affair.
Timeline: 5pm Ceremony, 6pm Cocktails, 7:30pm Reception.
Travel: Fly into MIA (20 min drive) or FLL (45 min drive).
Hotels: Ritz-Carlton Coconut Grove, Mr. C Miami, Mayfair House.
Registry: Zola and Crate & Barrel.
Tone: Helpful, elegant, polite, and excited. Keep answers brief (under 50 words unless asked for more).
`;
