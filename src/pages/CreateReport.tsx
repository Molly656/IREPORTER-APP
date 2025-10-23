import { Flag, LogOut, Grid3x3, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

export default function CreateReport() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-sidebar border-r border-sidebar-border p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Flag className="text-primary-foreground" size={20} />
          </div>
          <h1 className="text-xl font-semibold">iReporter</h1>
        </div>

        <Link to="/create">
          <Button className="w-full mb-8 h-12">CREATE RECORD</Button>
        </Link>

        <nav className="space-y-1">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent text-foreground"
          >
            <Grid3x3 size={20} />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/red-flags"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent text-foreground"
          >
            <Flag size={20} />
            <span>Red Flags</span>
          </Link>

          <Link
            to="/interventions"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent text-foreground"
          >
            <Plus size={20} />
            <span>Interventions</span>
          </Link>

          <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent text-foreground w-full">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold">Edit Red Flag</h2>

          <div className="flex items-center gap-3">
            <span>John Doe</span>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span>JD</span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <form className="space-y-6">
            <div>
              <Label htmlFor="title" className="text-muted-foreground">
                Title
              </Label>
              <Input
                id="title"
                placeholder="Bad Infrastructure"
                className="mt-2 bg-background border-border"
                defaultValue="Bad Infrastructure"
              />
            </div>

            <div>
              <Label htmlFor="description" className="text-muted-foreground">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Very temble Infrastructure"
                className="mt-2 bg-background border-border min-h-32"
                defaultValue="Very temble Infrastructure"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="latitude" className="text-muted-foreground">
                  Latitude
                </Label>
                <Input
                  id="latitude"
                  type="number"
                  placeholder="12.45"
                  className="mt-2 bg-background border-border"
                  defaultValue="12.45"
                />
              </div>

              <div>
                <Label htmlFor="longitude" className="text-muted-foreground">
                  Longitude
                </Label>
                <Input
                  id="longitude"
                  type="number"
                  placeholder="78.34"
                  className="mt-2 bg-background border-border"
                  defaultValue="78.34"
                />
              </div>
            </div>

            <div>
              <Label className="text-muted-foreground">Edit Image</Label>
              <div className="mt-2 p-4 border-2 border-dashed border-border rounded-lg bg-background">
                <img
                  src="https://images.unsplash.com/photo-1518876024007-c0c7c2826904?w=400"
                  alt="Report"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            <div>
              <Label className="text-muted-foreground">Edit Video</Label>
              <div className="mt-2 p-12 border-2 border-dashed border-border rounded-lg bg-background flex flex-col items-center justify-center text-center">
                <Plus size={32} className="text-muted-foreground mb-2" />
                <p className="text-muted-foreground">
                  Drag & stop
                  <br />
                  Viptio Kera
                </p>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 text-base font-medium">
              UPDATE RECORD
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
