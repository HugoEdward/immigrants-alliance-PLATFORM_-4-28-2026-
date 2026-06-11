import { useEffect, useRef } from 'react';
import type { GlobalSafetyRecord, RiskLevel } from '@/lib/globalSafetyData';
import type { Map as LeafletMap } from 'leaflet';

interface InteractiveDangerMapProps {
  zones: GlobalSafetyRecord[];
}

const riskColors: Record<RiskLevel, string> = {
  high: '#DC2626',
  medium: '#D97706',
  low: '#16A34A',
};

export default function InteractiveDangerMap({ zones }: InteractiveDangerMapProps) {
  const mapNode = useRef<HTMLDivElement | null>(null);
  const map = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!mapNode.current || map.current) return;

    let mounted = true;

    async function initializeMap() {
      const L = await import('leaflet');
      if (!mounted || !mapNode.current) return;

      map.current = L.map(mapNode.current, {
        center: [18, 5],
        zoom: 2,
        minZoom: 2,
        maxZoom: 8,
        scrollWheelZoom: true,
        worldCopyJump: true,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map.current);

      const markerLayer = L.featureGroup().addTo(map.current);

      zones.forEach((zone) => {
        const color = riskColors[zone.risk_level];
        const size = zone.risk_level === 'high' ? 28 : zone.risk_level === 'medium' ? 24 : 20;
        const marker = L.marker([zone.latitude, zone.longitude], {
          icon: L.divIcon({
            className: '',
            html: `<button class="danger-map-marker danger-map-marker-${zone.risk_level}" aria-label="${zone.city} ${zone.risk_level} risk marker" style="--marker-color:${color};width:${size}px;height:${size}px"></button>`,
            iconSize: [size, size],
            iconAnchor: [size / 2, size / 2],
            popupAnchor: [0, -(size / 2)],
          }),
        }).addTo(markerLayer);

        marker.bindPopup(`
          <div style="min-width: 260px; max-width: 340px; font-family: 'Source Sans 3', sans-serif">
            <strong style="display:block;font-size:17px;margin-bottom:4px;color:#0A1628;font-family:'Playfair Display',serif">${zone.city}, ${zone.country}</strong>
            <span style="display:inline-block;background:${color};color:white;padding:2px 10px;border-radius:12px;font-size:11px;font-weight:bold;margin-bottom:8px">${zone.risk_level === 'high' ? '🔴 Higher Risk' : zone.risk_level === 'medium' ? '🟡 Elevated Caution' : '🟢 Lower Risk'}</span>
            <div style="margin-bottom:8px;font-size:13px;line-height:1.5;color:#444">${zone.description}</div>
            <div style="margin-bottom:6px;font-size:12px;color:#888"><strong>Type:</strong> ${zone.type} · <strong>Source:</strong> ${zone.source}</div>
            ${zone.guidance ? `
            <div style="background:#f8f6f1;border-radius:8px;padding:10px;margin-top:8px">
              <div style="font-size:11px;font-weight:bold;color:#0A1628;margin-bottom:6px;text-transform:uppercase;letter-spacing:1px">Practical Guidance</div>
              ${zone.guidance.visit ? `<div style="font-size:12px;line-height:1.5;margin-bottom:4px"><strong style="color:#0E7C6B">Visit:</strong> ${zone.guidance.visit}</div>` : ''}
              ${zone.guidance.work ? `<div style="font-size:12px;line-height:1.5;margin-bottom:4px"><strong style="color:#D97706">Work:</strong> ${zone.guidance.work}</div>` : ''}
              ${zone.guidance.live ? `<div style="font-size:12px;line-height:1.5;margin-bottom:4px"><strong style="color:#1B3A5C">Live:</strong> ${zone.guidance.live}</div>` : ''}
              ${zone.guidance.family ? `<div style="font-size:12px;line-height:1.5"><strong style="color:#C5973B">Family:</strong> ${zone.guidance.family}</div>` : ''}
            </div>` : ''}
          </div>
        `, { maxWidth: 360 });
      });

      map.current.fitBounds(markerLayer.getBounds().pad(0.2));
    }

    initializeMap();

    return () => {
      mounted = false;
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [zones]);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white" style={{ boxShadow: '0 4px 20px rgba(10,22,40,.12)' }}>
      <div ref={mapNode} className="h-[520px] w-full min-h-[420px]" aria-label="Interactive global immigrant safety danger map" />
      <div className="flex flex-wrap items-center gap-4 border-t border-gray-100 px-5 py-4 text-xs font-bold uppercase tracking-widest text-navy">
        <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-red-600" aria-hidden="true" />🔴 Higher Risk</span>
        <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-yellow-600" aria-hidden="true" />🟡 Caution</span>
        <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-green-600" aria-hidden="true" />🟢 Safer</span>
        <span className="text-gray-400 font-normal normal-case tracking-normal ml-auto">Click any marker for guidance</span>
      </div>
    </div>
  );
}
