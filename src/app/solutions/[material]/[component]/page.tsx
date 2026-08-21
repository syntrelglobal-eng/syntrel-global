export function generateStaticParams() {
  return [
    { material: 'ss316l', component: 'uqd-coupler' },
    { material: 'titanium', component: 'pump-impeller' }
  ];
}

// Update the component to be async to handle Next.js Promises
export default async function ProgrammaticSEO({ params }: { params: Promise<{ material: string, component: string }> }) {
  // Await the params before trying to read or replace characters
  const resolvedParams = await params;
  
  // Add safety fallbacks
  const rawMaterial = resolvedParams?.material || 'ss316l';
  const rawComponent = resolvedParams?.component || 'component';

  const material = rawMaterial.replace(/-/g, ' ').toUpperCase();
  const component = rawComponent.replace(/-/g, ' ').toUpperCase();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 bg-[#0a0a0a] min-h-screen text-slate-300">
      <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase">Targeted Solution Profile</span>
      <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">
        {material} {component}
      </h1>
      <p className="text-slate-400 mt-6 text-lg">
        Architected for advanced thermal management and heavy-duty infrastructure. Engineered via AS9100 certified 5-axis Swiss-CNC capacity.
      </p>
    </div>
  )
}