import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  PanelLeft,
  Database,
  MessageSquareText,
  Settings,
  Key,
  Wrench,
  BookText,
  BetweenVerticalStart
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen flex flex-col border-r bg-white dark:bg-black dark:border-black">
      <div className="flex-1 px-4 py-6 flex flex-col gap-4">
        <Separator className="my-2" />
        <div>
          <Button variant="ghost" className="w-full justify-start mb-1"><BetweenVerticalStart className="w-4 h-4 mr-2" /> Getting Started</Button>
          <Button variant="ghost" className="w-full justify-start mb-1"><PanelLeft className="w-4 h-4 mr-2" /> Agents</Button>
          <Button variant="ghost" className="w-full justify-start mb-1"><Database className="w-4 h-4 mr-2" /> Datastores</Button>
          <Button variant="ghost" className="w-full justify-start mb-1"><BookText className="w-4 h-4 mr-2" /> Components</Button>
          <Button variant="ghost" className="w-full justify-start"><MessageSquareText className="w-4 h-4 mr-2" /> API Reference</Button>
        </div>
        <Separator className="my-2" />
        <div>
          <div className="text-xs text-muted-foreground uppercase mb-2">Admin</div>
          <Button variant="ghost" className="w-full justify-start mb-1"><Wrench className="w-4 h-4 mr-2" /> Components Usage</Button>
          <Button variant="ghost" className="w-full justify-start mb-1"><Key className="w-4 h-4 mr-2" /> API Keys</Button>
          <Button variant="ghost" className="w-full justify-start"><Settings className="w-4 h-4 mr-2" /> Workspace Settings</Button>
        </div>
        <Separator className="my-2" />
        <div className="mt-auto text-xs text-muted-foreground px-1">Pointer is running on contextual.ai</div>
      </div>
    </aside>
  );
} 