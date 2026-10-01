import React from 'react';
import {
  ShieldCheck,
  Building2,
  Users,
  AlertTriangle,
  FileCheck,
  CheckCircle,
  XCircle,
  UserCheck,
  Download,
  Filter,
  Search,
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export const AdminDashboardPage: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/60 shadow-xs">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-1">
            <span className="font-mono text-[10px] bg-tertiary-container text-tertiary-fixed px-2 py-0.5 rounded uppercase font-bold border border-outline">
              ADMIN OVERSIGHT
            </span>
            <span>Intake & Audit Operations Console</span>
          </div>
          <h1 className="font-headline-lg text-xl md:text-2xl font-bold text-primary tracking-tight">
            Municipal Verification & Control
          </h1>
          <p className="font-body-md text-xs text-on-surface-variant mt-0.5">
            Review unverified citizen tickets, assign department field teams, and manage system access.
          </p>
        </div>
        <div className="flex items-center gap-2 self-start md:self-auto">
          <Button variant="outline" size="sm" className="gap-1.5 text-xs">
            <Download className="w-3.5 h-3.5" />
            <span>Export Audit Log</span>
          </Button>
          <Button size="sm" className="gap-1.5 text-xs shadow-sm">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Department Assignment</span>
          </Button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-surface-container-lowest">
          <p className="font-label-sm text-xs font-semibold text-on-surface-variant">Unverified Complaints</p>
          <p className="font-headline-md text-2xl font-bold text-amber-700 mt-2">14</p>
          <span className="font-code-sm text-[11px] text-amber-800 font-medium mt-1 block">Requires admin triage</span>
        </Card>

        <Card className="bg-surface-container-lowest">
          <p className="font-label-sm text-xs font-semibold text-on-surface-variant">Active Dispatches</p>
          <p className="font-headline-md text-2xl font-bold text-primary mt-2">48</p>
          <span className="font-code-sm text-[11px] text-secondary font-medium mt-1 block">Across 6 departments</span>
        </Card>

        <Card className="bg-surface-container-lowest">
          <p className="font-label-sm text-xs font-semibold text-on-surface-variant">Resolved Today</p>
          <p className="font-headline-md text-2xl font-bold text-emerald-700 mt-2">92</p>
          <span className="font-code-sm text-[11px] text-emerald-800 font-medium mt-1 block">96% SLA compliance</span>
        </Card>

        <Card className="bg-surface-container-lowest">
          <p className="font-label-sm text-xs font-semibold text-on-surface-variant">Spam / Warnings</p>
          <p className="font-headline-md text-2xl font-bold text-red-700 mt-2">3</p>
          <span className="font-code-sm text-[11px] text-red-800 font-medium mt-1 block">Flagged for review</span>
        </Card>
      </div>

      {/* Verification Queue Table */}
      <Card className="p-0 overflow-hidden border-outline-variant">
        <div className="p-4 bg-surface-container-lowest border-b border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-title-lg text-base font-bold text-primary tracking-tight">
              Issue Verification Queue
            </h2>
            <p className="font-body-sm text-xs text-on-surface-variant">
              Triage pending citizen submissions before dispatching to department officers.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-outline" />
              <input
                type="text"
                placeholder="Filter queue..."
                className="pl-8 pr-3 py-1 text-xs bg-surface-container-low border border-outline-variant rounded-md w-40 focus:outline-none focus:border-secondary"
              />
            </div>
            <Button variant="outline" size="sm" className="h-8 text-xs gap-1">
              <Filter className="w-3 h-3" /> Filter
            </Button>
          </div>
        </div>

        {/* Civic Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-surface-container-low font-label-sm uppercase tracking-wider text-outline border-b border-outline-variant">
              <tr>
                <th className="py-3 px-4">Ticket ID</th>
                <th className="py-3 px-4">Category & Location</th>
                <th className="py-3 px-4">Citizen</th>
                <th className="py-3 px-4">Priority</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Verification Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/40 bg-surface-container-lowest font-body-sm">
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-low/60 transition-colors">
                <td className="py-3 px-4 font-mono font-bold text-primary">#CV-8921</td>
                <td className="py-3 px-4">
                  <p className="font-bold text-primary text-xs">Road Pothole Hazard</p>
                  <p className="text-on-surface-variant text-[11px]">402 Elm Ave • Ward 4</p>
                </td>
                <td className="py-3 px-4">Clara Oswald</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 border border-red-200">
                    CRITICAL
                  </span>
                </td>
                <td className="py-3 px-4">
                  <Badge status="Pending" />
                </td>
                <td className="py-3 px-4 text-right space-x-1.5">
                  <Button size="sm" className="h-7 px-2.5 text-[11px] gap-1 bg-emerald-700 hover:bg-emerald-800">
                    <CheckCircle className="w-3 h-3" /> Verify
                  </Button>
                  <Button variant="outline" size="sm" className="h-7 px-2.5 text-[11px] gap-1 text-red-700 border-red-200 hover:bg-red-50">
                    <XCircle className="w-3 h-3" /> Reject
                  </Button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-surface-container-low/60 transition-colors">
                <td className="py-3 px-4 font-mono font-bold text-primary">#CV-8904</td>
                <td className="py-3 px-4">
                  <p className="font-bold text-primary text-xs">Water Main Rupture</p>
                  <p className="text-on-surface-variant text-[11px]">Lincoln & 7th Blvd • Public Utilities</p>
                </td>
                <td className="py-3 px-4">Robert Vance</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                    HIGH
                  </span>
                </td>
                <td className="py-3 px-4">
                  <Badge status="Verified" />
                </td>
                <td className="py-3 px-4 text-right space-x-1.5">
                  <Button size="sm" className="h-7 px-2.5 text-[11px] gap-1">
                    <Building2 className="w-3 h-3" /> Assign Dept
                  </Button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-surface-container-low/60 transition-colors">
                <td className="py-3 px-4 font-mono font-bold text-primary">#CV-8872</td>
                <td className="py-3 px-4">
                  <p className="font-bold text-primary text-xs">Traffic Signal Outage</p>
                  <p className="text-on-surface-variant text-[11px]">Grand & Main Intersection</p>
                </td>
                <td className="py-3 px-4">Elena Rostova</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
                    MEDIUM
                  </span>
                </td>
                <td className="py-3 px-4">
                  <Badge status="Assigned" />
                </td>
                <td className="py-3 px-4 text-right space-x-1.5">
                  <Button variant="outline" size="sm" className="h-7 px-2.5 text-[11px]">
                    View Audit
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
