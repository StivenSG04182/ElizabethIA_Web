"use client";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Settings2 } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function ModalSetting({ trigger }: { trigger?: React.ReactNode }) {
  const [darkMode, setDarkMode] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);
  const [name, setName] = React.useState("Elizabeth");
  const [username, setUsername] = React.useState("elizabeth.ia");

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ? trigger : (
          <Button variant="outline">
            <Settings2 />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Configuraciones</DialogTitle>
          <DialogDescription>
            Ajusta tus preferencias de usuario.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nombre:
            </Label>
            <Input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="col-span-3" 
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Usuario:
            </Label>
            <Input 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              className="col-span-3" 
            />
          </div>
        </div>
        {/* <DialogFooter>
          <Button type="submit">Guardar cambios</Button>
        </DialogFooter> */}
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cerrar
            </Button>
          </DialogClose>
          <Button type="button" onClick={() => alert("Guardado!")}>
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
