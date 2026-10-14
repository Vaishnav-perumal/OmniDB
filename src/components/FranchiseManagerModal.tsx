import React, { useState, useEffect } from 'react';
import { db } from '../db/database';
import { franchiseEngine } from '../services/franchise/franchiseEngine';
import {
  FranchiseMatchReview,
  FranchiseExpansionSettings,
  FranchiseLogEntry,
  BackfillProgress
} from '../types/franchise';
import {
  Layers,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  SlidersHorizontal,
  History,
  X,
  Sparkles,
  Database,
  ShieldCheck,
  Check,
  ChevronRight
} from 'lucide-react';

interface FranchiseManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDataChanged: () => void;
}

export const FranchiseManagerModal: React.FC<FranchiseManagerModalProps> = ({
  isOpen,
  onClose,
  onDataChanged
}) => {
  const [activeTab, setActiveTab] = useState<'backfill' | 'settings' | 'review' | 'logs'>('backfill');
  const [progress, setProgress] = useState<BackfillProgress>(() => franchiseEngine.getBackfillProgress());
  const [reviews, setReviews] = useState<FranchiseMatchReview[]>(() => db.getReviewMatches());
  const [logs, setLogs] = useState<FranchiseLogEntry[]>(() => db.getFranchiseLogs());
  const [settings, setSettings] = useState<FranchiseExpansionSettings>(() => db.getFranchiseSettings());
  const [isSavingSettings, setIsSavingSettings] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setProgress(franchiseEngine.getBackfillProgress());
      setReviews(db.getReviewMatches());
      setLogs(db.getFranchiseLogs());
      setSettings(db.getFranchiseSettings());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStartBackfill = async () => {
    franchiseEngine.runBackfill(4, 250, newProg => {
      setProgress(newProg);
      setLogs(db.getFranchiseLogs());
      setReviews(db.getReviewMatches());
    }).then(() => {
      onDataChanged();
      setLogs(db.getFranchiseLogs());
    });
  };

  const handlePauseBackfill = () => {
    franchiseEngine.pauseBackfill();
    setProgress(franchiseEngine.getBackfillProgress());
  };

  const handleResetBackfill = () => {
    franchiseEngine.resetBackfill();
    setProgress(franchiseEngine.getBackfillProgress());
  };

  const handleResolveReview = async (matchId: string, action: 'approve' | 'reject') => {
    await db.resolveReviewMatch(matchId, action);
    setReviews(db.getReviewMatches());
    setLogs(db.getFranchiseLogs());
    onDataChanged();
  };

  const handleSaveSettings = () => {
    setIsSavingSettings(true);
    db.updateFranchiseSettings(settings);
    setTimeout(() => {
      setIsSavingSettings(false);
      setLogs(db.getFranchiseLogs());
    }, 400);
  };

  const percentComplete =
    progress.totalGames > 0
      ? Math.round((progress.currentIndex / progress.totalGames) * 100)
      : 0;

  const pendingReviews = reviews.filter(r => r.status === 'pending');

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0e1622] rounded-2xl border border-[#23384e] max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden font-mono text-xs">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-[#121c29] border-b border-[#1b2b3d] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#182a3e] text-[#38bdf8] border border-[#2a4a70]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wide flex items-center gap-2">
                Franchise Auto-Expansion Engine & Backfill
              </h3>
              <p className="text-[11px] text-zinc-400">
                Automated IGDB / RAWG series detection, deduplication & price pipeline ingestion.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-4 bg-[#0a1018] border-b border-[#1b2b3d] overflow-x-auto">
          <button
            onClick={() => setActiveTab('backfill')}
            className={`px-3.5 py-2.5 font-semibold transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'backfill'
                ? 'text-[#38bdf8] border-[#38bdf8]'
                : 'text-zinc-400 hover:text-white border-transparent'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Database Backfill</span>
          </button>

          <button
            onClick={() => setActiveTab('review')}
            className={`px-3.5 py-2.5 font-semibold transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'review'
                ? 'text-[#38bdf8] border-[#38bdf8]'
                : 'text-zinc-400 hover:text-white border-transparent'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>Needs Review</span>
            {pendingReviews.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-amber-500 text-black font-bold">
                {pendingReviews.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-3.5 py-2.5 font-semibold transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'settings'
                ? 'text-[#38bdf8] border-[#38bdf8]'
                : 'text-zinc-400 hover:text-white border-transparent'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Expansion Settings</span>
          </button>

          <button
            onClick={() => setActiveTab('logs')}
            className={`px-3.5 py-2.5 font-semibold transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'logs'
                ? 'text-[#38bdf8] border-[#38bdf8]'
                : 'text-zinc-400 hover:text-white border-transparent'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>Run Logs ({logs.length})</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          {/* TAB 1: BACKFILL */}
          {activeTab === 'backfill' && (
            <div className="space-y-5">
              <div className="bg-[#121c29] p-4 rounded-xl border border-[#23384e] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-300 font-bold uppercase text-xs">
                    Franchise Expansion Progress
                  </span>
                  <span className="text-[#38bdf8] font-bold">
                    {progress.currentIndex} / {progress.totalGames || '125'} ({percentComplete}%)
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2.5 bg-black/60 rounded-full overflow-hidden border border-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-300"
                    style={{ width: `${Math.max(4, percentComplete)}%` }}
                  />
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[11px]">
                  <div className="bg-[#0b121b] p-2 rounded-lg border border-[#1b2b3d]">
                    <span className="text-zinc-500 block uppercase text-[9px]">Franchises Found</span>
                    <strong className="text-white text-sm">{progress.franchisesFound}</strong>
                  </div>
                  <div className="bg-[#0b121b] p-2 rounded-lg border border-[#1b2b3d]">
                    <span className="text-zinc-500 block uppercase text-[9px]">New Games Ingested</span>
                    <strong className="text-emerald-400 text-sm">{progress.newGamesAdded}</strong>
                  </div>
                  <div className="bg-[#0b121b] p-2 rounded-lg border border-[#1b2b3d]">
                    <span className="text-zinc-500 block uppercase text-[9px]">Rate-Limit Delay</span>
                    <strong className="text-[#38bdf8] text-sm">250ms / call</strong>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex flex-wrap items-center gap-3">
                {!progress.isRunning ? (
                  <button
                    onClick={handleStartBackfill}
                    className="px-4 py-2.5 rounded-lg bg-[#38bdf8] hover:bg-[#60cdff] text-slate-950 font-bold flex items-center gap-2 shadow-md"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>{progress.currentIndex > 0 ? 'Resume Backfill' : 'Start One-Time Backfill'}</span>
                  </button>
                ) : (
                  <button
                    onClick={handlePauseBackfill}
                    className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold flex items-center gap-2 shadow-md"
                  >
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Pause Backfill</span>
                  </button>
                )}

                <button
                  onClick={handleResetBackfill}
                  className="px-3.5 py-2.5 rounded-lg bg-[#142335] hover:bg-[#1d324b] text-zinc-300 border border-[#274465] flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Progress</span>
                </button>
              </div>

              <div className="bg-[#0b121b] p-4 rounded-xl border border-[#1c2c3e] text-zinc-400 space-y-1.5 leading-relaxed font-sans text-xs">
                <strong className="text-zinc-200 font-mono block uppercase text-[11px]">
                  How the Backfill Works:
                </strong>
                <p>
                  • Processes your existing canonical catalog in batches of 4 games with rate-limit safe intervals.
                </p>
                <p>
                  • Queries IGDB and RAWG provider adapters for franchise/collection data.
                </p>
                <p>
                  • Deduplicates against your existing records by ID, Steam App ID, and title similarity.
                </p>
                <p>
                  • Ingests missing titles with generated storefront listings and price history records into your price sync pipeline.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: NEEDS REVIEW */}
          {activeTab === 'review' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">
                  Low-confidence matches (50% – 84%) flagged for human verification instead of guessing.
                </span>
                <span className="text-zinc-500">
                  {pendingReviews.length} pending
                </span>
              </div>

              {pendingReviews.length === 0 ? (
                <div className="py-12 text-center text-zinc-500">
                  <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-400 mb-2" />
                  <span>No low-confidence matches requiring review!</span>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {pendingReviews.map(r => (
                    <div
                      key={r.id}
                      className="p-3.5 rounded-xl bg-[#121c29] border border-[#23384e] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <strong className="text-white">{r.gameTitle}</strong>
                          <ChevronRight className="w-3 h-3 text-zinc-500" />
                          <span className="text-[#38bdf8] font-bold">{r.candidateFranchise}</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 font-sans">{r.reason}</p>
                        <span className="inline-block px-1.5 py-0.2 rounded text-[10px] bg-amber-500/20 text-amber-300 font-mono">
                          Confidence: {Math.round(r.confidenceScore * 100)}%
                        </span>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <button
                          onClick={() => handleResolveReview(r.id, 'approve')}
                          className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center gap-1"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Approve & Link</span>
                        </button>
                        <button
                          onClick={() => handleResolveReview(r.id, 'reject')}
                          className="px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs"
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="space-y-4">
              <p className="text-zinc-400 font-sans text-xs">
                Control which categories of series items enter your database during auto-expansion.
              </p>

              <div className="space-y-2.5">
                {[
                  { key: 'includeMainGames', label: 'Main Series Games (Default: Yes)' },
                  { key: 'includeRemakesRemasters', label: 'Remakes & Remasters (Default: Yes)' },
                  { key: 'includeSpinOffs', label: 'Spin-Off Titles (e.g. Fallout Shelter) (Default: Yes)' },
                  { key: 'includeDlc', label: 'DLC & Expansions (Default: No)' },
                  { key: 'includeBundles', label: 'Bundles & Compilations (Default: No)' },
                  { key: 'includeMods', label: 'Standalone Mods (Default: No)' },
                  { key: 'includeCancelledUnreleased', label: 'Announced / Unreleased Titles (Default: No)' }
                ].map(item => {
                  const isChecked = (settings as any)[item.key];
                  return (
                    <label
                      key={item.key}
                      className="flex items-center justify-between p-3 rounded-lg bg-[#121c29] border border-[#23384e] cursor-pointer hover:border-[#38bdf8]/50 transition-colors"
                    >
                      <span className="text-zinc-300">{item.label}</span>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={e =>
                          setSettings(prev => ({
                            ...prev,
                            [item.key]: e.target.checked
                          }))
                        }
                        className="w-4 h-4 rounded text-[#38bdf8] focus:ring-0 cursor-pointer"
                      />
                    </label>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-[#1b2b3d] flex justify-end">
                <button
                  onClick={handleSaveSettings}
                  className="px-4 py-2 rounded-lg bg-[#38bdf8] text-slate-950 font-bold hover:bg-[#60cdff]"
                >
                  {isSavingSettings ? 'Saved!' : 'Save Filter Preferences'}
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: LOGS */}
          {activeTab === 'logs' && (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {logs.length === 0 ? (
                <div className="py-12 text-center text-zinc-500">No logs recorded yet.</div>
              ) : (
                logs.map(log => (
                  <div
                    key={log.id}
                    className="p-2.5 rounded-lg bg-[#111a26] border border-[#1b2a3b] flex items-start justify-between gap-3 text-[11px]"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            log.status === 'success'
                              ? 'bg-emerald-400'
                              : log.status === 'warn'
                              ? 'bg-amber-400'
                              : log.status === 'error'
                              ? 'bg-rose-400'
                              : 'bg-[#38bdf8]'
                          }`}
                        />
                        <strong className="text-white font-mono">{log.action}</strong>
                      </div>
                      <p className="text-zinc-400 mt-0.5">{log.details}</p>
                    </div>
                    <span className="text-[10px] text-zinc-500 flex-shrink-0">{log.timestamp}</span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
