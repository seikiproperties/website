// Developer logo SVGs — inline, no external dependency, always loads.
// Styled as simplified wordmarks matching each brand's actual typography.
// All rendered in navy at low opacity to fit the cream-background strip.

type LogoProps = { className?: string };

export function EmaarLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Emaar">
      <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" letterSpacing="2" fill="currentColor">EMAAR</text>
    </svg>
  );
}

export function NakheelLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Nakheel">
      {/* Palm tree icon simplified */}
      <path d="M18 8 C18 8 14 12 10 14 C14 13 16 15 18 20 C20 15 22 13 26 14 C22 12 18 8 18 8Z" fill="currentColor" opacity="0.7"/>
      <rect x="17" y="18" width="2" height="14" fill="currentColor" opacity="0.7"/>
      <text x="34" y="28" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" letterSpacing="1.5" fill="currentColor">NAKHEEL</text>
    </svg>
  );
}

export function AldarLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Aldar">
      {/* Aldar's distinctive circular/dome shape */}
      <circle cx="18" cy="20" r="14" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <path d="M4 20 Q18 6 32 20" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <text x="40" y="26" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="700" letterSpacing="1.5" fill="currentColor">ALDAR</text>
    </svg>
  );
}

export function BinghattiLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Binghatti">
      {/* Binghatti's distinctive zigzag architectural motif */}
      <path d="M6 30 L12 10 L18 30 L24 10 L30 30" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="40" y="27" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="700" letterSpacing="1" fill="currentColor">BINGHATTI</text>
    </svg>
  );
}

export function MeraasLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Meraas">
      <text x="0" y="27" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="300" letterSpacing="4" fill="currentColor">MERAAS</text>
    </svg>
  );
}

export function EllingtonLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Ellington">
      {/* Ellington's E mark */}
      <rect x="4" y="10" width="20" height="2.5" fill="currentColor"/>
      <rect x="4" y="18.5" width="14" height="2.5" fill="currentColor"/>
      <rect x="4" y="27" width="20" height="2.5" fill="currentColor"/>
      <rect x="4" y="10" width="2.5" height="19.5" fill="currentColor"/>
      <text x="34" y="27" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="600" letterSpacing="1.5" fill="currentColor">ELLINGTON</text>
    </svg>
  );
}

export function AziziLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Azizi">
      <text x="0" y="27" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="700" letterSpacing="2" fill="currentColor">AZIZI</text>
    </svg>
  );
}

export function SelectGroupLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 190 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Select Group">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" letterSpacing="2" fill="currentColor">SELECT</text>
      <text x="0" y="36" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="400" letterSpacing="3" fill="currentColor">GROUP</text>
    </svg>
  );
}

export function SobhaLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Sobha">
      {/* Sobha's lotus/flower motif simplified */}
      <path d="M18 8 C18 8 12 14 12 20 C12 23 15 26 18 26 C21 26 24 23 24 20 C24 14 18 8 18 8Z" fill="currentColor" opacity="0.5"/>
      <path d="M18 14 C18 14 14 17 14 20 C14 22 16 24 18 24 C20 24 22 22 22 20 C22 17 18 14 18 14Z" fill="currentColor"/>
      <text x="32" y="27" fontFamily="Arial, sans-serif" fontSize="21" fontWeight="700" letterSpacing="1.5" fill="currentColor">SOBHA</text>
    </svg>
  );
}

export function DamacLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="DAMAC">
      <text x="0" y="27" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="800" letterSpacing="2" fill="currentColor">DAMAC</text>
    </svg>
  );
}

// Master list in display order
export const developerLogos = [
  { id: "emaar", Logo: EmaarLogo },
  { id: "nakheel", Logo: NakheelLogo },
  { id: "aldar", Logo: AldarLogo },
  { id: "binghatti", Logo: BinghattiLogo },
  { id: "sobha", Logo: SobhaLogo },
  { id: "damac", Logo: DamacLogo },
  { id: "meraas", Logo: MeraasLogo },
  { id: "ellington", Logo: EllingtonLogo },
  { id: "azizi", Logo: AziziLogo },
  { id: "select-group", Logo: SelectGroupLogo },
];
