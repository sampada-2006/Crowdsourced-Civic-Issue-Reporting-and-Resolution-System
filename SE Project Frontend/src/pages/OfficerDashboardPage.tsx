import React from 'react';
import {
  Shield,
  ClipboardList,
  Clock,
  CheckCircle2,
  Upload,
  AlertTriangle,
  MapPin,
  Camera,
  Navigation,
  ArrowUpRight,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export const OfficerDashboardPage: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Officer Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/60 shadow-xs">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-1">
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-mono text-[10px] bg-primary-container text-on-primary px-2 py-0.5 rounded font-bold">
              DISPATCH FIELD OFFICERS
            </span>
            <span>Public Works Department</span>
          </div>
          <h1 className="font-headline-lg text-xl md:text-2xl font-bold text-primary tracking-tight">
            Field Operations & Work Orders
          </h1>
          <p className="font-body-md text-xs text-on-surface-variant mt-0.5">
            Manage assigned repair tickets, update status logs, and submit completion proof.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <Button size="sm" className="gap-1.5 text-xs shadow-sm">
            <Camera className="w-3.5 h-3.5" />
            <span>Upload Resolution Proof</span>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-surface-container-lowest">
          <p className="font-label-sm text-xs font-semibold text-on-surface-variant">Assigned Work Orders</p>
          <p className="font-headline-md text-2xl font-bold text-primary mt-2">5</p>
          <span className="font-code-sm text-[11px] text-secondary font-medium mt-1 block">2 pending action today</span>
        </Card>

        <Card className="bg-surface-container-lowest">
          <p className="font-label-sm text-xs font-semibold text-on-surface-variant">SLA Compliant Ratio</p>
          <p className="font-headline-md text-2xl font-bold text-emerald-700 mt-2">98%</p>
          <span className="font-code-sm text-[11px] text-emerald-800 font-medium mt-1 block">Avg response: 1.4h</span>
        </Card>

        <Card className="bg-surface-container-lowest">
          <p className="font-label-sm text-xs font-semibold text-on-surface-variant">In-Progress Repairs</p>
          <p className="font-headline-md text-2xl font-bold text-blue-700 mt-2">3</p>
          <span className="font-code-sm text-[11px] text-blue-800 font-medium mt-1 block">Crews on-site</span>
        </Card>

        <Card className="bg-surface-container-lowest">
          <p className="font-label-sm text-xs font-semibold text-on-surface-variant">Proof Under Review</p>
          <p className="font-headline-md text-2xl font-bold text-indigo-700 mt-2">1</p>
          <span className="font-code-sm text-[11px] text-indigo-800 font-medium mt-1 block">Awaiting admin sign-off</span>
        </Card>
      </div>

      {/* Assigned Work Orders List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-title-lg text-base font-bold text-primary flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-primary" />
            <span>Active Dispatch Queue</span>
          </h2>
          <span className="font-code-sm text-xs text-outline font-semibold">
            OFFICER ID: #PW-4821
          </span>
        </div>

        {/* Work Order 1 */}
        <Card className="space-y-4 border-l-4 border-l-secondary">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/40 pb-3">
            <div className="flex items-center gap-2">
              <Badge status="In Progress" />
              <span className="font-mono text-xs font-bold text-primary">#WO-8921-PW</span>
              <span className="text-xs text-outline">• Priority: High</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>SLA Target: 3h 45m remaining</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-2">
              <h3 className="font-title-md text-base font-bold text-primary">
                Main Road Asphalt Degradation & Pothole Patch
              </h3>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                Emergency patch work dispatched for 402 Elm Ave. Road crew asphalt paver #4 deployed.
              </p>
              <div className="flex items-center gap-2 text-xs text-outline font-medium pt-1">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>402 Elm Ave, District 4 • GPS: 34.0522, -118.2437</span>
              </div>
            </div>

            <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant space-y-2 flex flex-col justify-between">
              <div>
                <p className="font-label-sm text-[11px] uppercase font-bold text-outline">Dispatch Action</p>
                <p className="font-body-sm text-xs font-semibold text-primary mt-0.5">Status: Crew On-Site</p>
              </div>

              <div className="space-y-1.5 pt-2">
                <Button size="sm" className="w-full text-xs gap-1.5">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Submit Proof Photo</span>
                </Button>
                <Button variant="outline" size="sm" className="w-full text-xs gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-secondary" />
                  <span>Open GPS Route</span>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Work Order 2 */}
        <Card className="space-y-4 border-l-4 border-l-emerald-600">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/40 pb-3">
            <div className="flex items-center gap-2">
              <Badge status="Resolved" />
              <span className="font-mono text-xs font-bold text-primary">#WO-8820-PW</span>
              <span className="text-xs text-outline">• Completed</span>
            </div>
            <span className="font-code-sm text-xs text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-medium">
              Resolution Verified by Admin
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="font-title-md text-base font-bold text-primary">
              Streetlight Outage Fixture Repair
            </h3>
            <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
              Replaced LED ballast bulb on lamp post #108 on Oak St. Photo verification uploaded.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
