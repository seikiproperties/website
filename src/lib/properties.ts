import { images } from "@/lib/images";

export type Property = {
  id: string;
  name: string;
  area: string;
  price: string;
  type: "Off-Plan" | "Secondary";
  category: "Apartment" | "Villa" | "Townhouse" | "Penthouse";
  image: string;
};

// TODO: Replace with real, current inventory. This is illustrative
// placeholder data so the page is fully functional and ready to populate.
export const properties: Property[] = [
  {
    id: "1",
    name: "Sobha Hartland II",
    area: "Mohammed Bin Rashid City",
    price: "From AED 2.1M",
    type: "Off-Plan",
    category: "Apartment",
    image: images.villaExterior,
  },
  {
    id: "2",
    name: "Damac Islands Villa",
    area: "Dubailand",
    price: "From AED 3.8M",
    type: "Off-Plan",
    category: "Villa",
    image: images.villaModernWhite,
  },
  {
    id: "3",
    name: "Emirates Hills Estate",
    area: "Emirates Hills",
    price: "AED 18.5M",
    type: "Secondary",
    category: "Villa",
    image: images.villaGoldenHour,
  },
  {
    id: "4",
    name: "Business Bay Residence",
    area: "Business Bay",
    price: "AED 4.2M",
    type: "Secondary",
    category: "Apartment",
    image: images.buildingModern,
  },
  {
    id: "5",
    name: "Dubai Marina Tower Suite",
    area: "Dubai Marina",
    price: "AED 3.1M",
    type: "Secondary",
    category: "Apartment",
    image: images.marina,
  },
  {
    id: "6",
    name: "Palm Jumeirah Signature Villa",
    area: "Palm Jumeirah",
    price: "AED 32M",
    type: "Secondary",
    category: "Villa",
    image: images.villaExterior,
  },
];
