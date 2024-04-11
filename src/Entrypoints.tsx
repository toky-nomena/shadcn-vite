import * as React from "react";

import { Button } from "./components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./components/ui/command";

import { Check, Layers2, ArrowRight } from "lucide-react";
import { cn } from "./lib/utils";

export function EntryPointSelector() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Select an entrypoint
          <ArrowRight className="ml-4 h-4 w-4 " />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <ProfileForm />
      </DialogContent>
    </Dialog>
  );
}

function EntryPointCommandItem(props: React.ComponentProps<"div">) {
  return (
    <div className="flex items-center w-full">
      <div className="flex items-center grow">
        <Layers2 className="mr-2 h-4 w-4" />
        <span>{props.children}</span>
      </div>
      <Check className={cn("mr-2 h-4 w-4 flex-none", "opacity-100")} />
    </div>
  );
}

function ProfileForm() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Search an entrypoint..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup className="p-2">
          <CommandItem className="mb-2">
            <EntryPointCommandItem>a</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>b</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>c</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>d</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>e</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>f</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>f</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>f</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>f</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>f</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>f</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>f</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>f</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>f</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>f</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>f</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>f</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>f</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>f</EntryPointCommandItem>
          </CommandItem>
          <CommandItem className="mb-2">
            <EntryPointCommandItem>f</EntryPointCommandItem>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
