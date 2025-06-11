// pages/agent-create.tsx
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  Brain,
  Database,
  Settings2,
  Search,
  Layers,
  Filter,
  Sparkles,
  Users,
} from "lucide-react"


export default function AgentCreatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Breadcrumb items */}
      <div className="flex items-center text-sm mb-6">

          <BreadcrumbItem>Pointer</BreadcrumbItem>
          <span className="mx-2 text-muted-foreground">&gt;</span>
          <BreadcrumbItem>Agents</BreadcrumbItem>
          <span className="mx-2 text-muted-foreground">&gt;</span>
          <BreadcrumbItem>General</BreadcrumbItem>
        </div>
      
      {/* Title and description */}
      <h1 className="text-2xl font-bold mb-1">Create New Agent</h1>
      <div className="text-sm text-muted-foreground mb-8">Customize your agent&apos;s behavior. Contextual applies sensible defaults for all non-required settings, but we recommend configuring at least the Base settings to match your preferences.</div>
      
      {/* Tabs  */}
      <Tabs defaultValue="general" className="flex gap-8">
        <div>
           <div className="min-w-[220px] flex flex-col gap-8 pt-2">
          <TabsList className="flex flex-col items-start gap-1 w-full bg-transparent p-0">
            <TabsTrigger value="general" >
              <Settings2 className="w-4 h-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="datastores" >
              <Database className="w-4 h-4" />
              Datastores
            </TabsTrigger>
          </TabsList>
        </div>
    
      {/* Advanced Section */}
      <div className="mt-200"  style={{ marginTop: '45px' }}>
        <div className="text-xs text-muted-foreground uppercase mb-2 mt-8 ml-3">BASE</div>
        
        <TabsList className="flex flex-col items-start gap-2 w-full bg-transparent p-0">
          <TabsTrigger value="system-prompts" style={{ marginTop: '320px' }}>
            <MessageSquare className="w-4 h-4" />
            System Prompts
          </TabsTrigger>
          <TabsTrigger value="query-understanding" >
            <Brain className="w-4 h-4" />
            Query Understanding
          </TabsTrigger>
          <div className="text-xs text-muted-foreground uppercase mb-2 mt-8 ml-3">ADVANCE</div>
          <TabsTrigger value="query-reformulation" >
            <Settings2 className="w-4 h-4" />
            Query Reformulation
          </TabsTrigger>
          <TabsTrigger value="retrieval" >
            <Search className="w-4 h-4" />
            Retrieval
          </TabsTrigger>
          <TabsTrigger value="rerank" >
            <Layers className="w-4 h-4" />
            Rerank
          </TabsTrigger>
          <TabsTrigger value="filter" >
            <Filter className="w-4 h-4" />
            Filter
          </TabsTrigger>
          <TabsTrigger value="generation" >
            <Sparkles className="w-4 h-4" />
            Generation
          </TabsTrigger>
          <TabsTrigger value="user-experience" >
            <Users className="w-4 h-4" />
            User Experience
          </TabsTrigger>
        </TabsList>
      </div>
    </div>

        {/* right side content */}
        <div className="flex-1">
          <TabsContent value="general" className="p-0">
            <div className="bg-muted rounded-xl p-8">
              <div className="font-semibold mb-1">General</div>
              <div className="text-sm text-muted-foreground mb-6">General information about this agent.</div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="agent-name" className="block font-medium mb-1">Agent Name <span className="text-red-500">*</span></label>
                  <Input id="agent-name" placeholder="Name of the agent" required />
                  <div className="text-xs text-muted-foreground mt-1">Name of the agent.</div>
                </div>
                <div>
                  <label htmlFor="description" className="block font-medium mb-1">Description</label>
                  <Textarea id="description" placeholder="A short description of the agent" />
                  <div className="text-xs text-muted-foreground mt-1">A short description of the agent. This will be displayed in the agents list.</div>
                </div>
                
              </form>
            </div>
          </TabsContent>
          {/* 其他 TabsContent 可按需添加 */}
          <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline" type="button">Cancel</Button>
                  <Button type="submit">Next</Button>
          </div>
        </div>
      </Tabs>
    </div>
  )
}