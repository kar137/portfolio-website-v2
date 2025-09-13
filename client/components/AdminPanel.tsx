import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useId, useState } from "react";
import type { Project } from "./sections/Projects";
import type { Certification } from "./sections/Certifications";
import type { BlogPost } from "./sections/Blog";

export default function AdminPanel({
  open,
  onOpenChange,
  onAddProject,
  onAddCertification,
  onAddPost,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onAddProject: (p: Project) => void;
  onAddCertification: (c: Certification) => void;
  onAddPost: (p: BlogPost) => void;
}) {
  const genId = useId();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl glass border-glass-border">
        <DialogHeader>
          <DialogTitle className="section-title">Admin Interface</DialogTitle>
          <DialogDescription>
            Add and manage content: projects, certifications, and blog posts.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="projects">
          <TabsList className="glass">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="certs">Certifications</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
          </TabsList>
          <TabsContent value="projects">
            <ProjectForm
              onSubmit={(vals) => {
                onAddProject({
                  id: genId + Math.random().toString(36).slice(2),
                  ...vals,
                });
                onOpenChange(false);
              }}
            />
          </TabsContent>
          <TabsContent value="certs">
            <CertForm
              onSubmit={(vals) => {
                onAddCertification({
                  id: genId + Math.random().toString(36).slice(2),
                  ...vals,
                });
                onOpenChange(false);
              }}
            />
          </TabsContent>
          <TabsContent value="blog">
            <BlogForm
              onSubmit={(vals) => {
                onAddPost({
                  id: genId + Math.random().toString(36).slice(2),
                  ...vals,
                });
                onOpenChange(false);
              }}
            />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

function Label({ children }: { children: string }) {
  return <label className="text-sm text-muted-foreground">{children}</label>;
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`mt-1 w-full rounded-lg bg-transparent border border-neon-cyan/40 px-3 py-2 outline-none focus:ring-2 focus:ring-neon-cyan/40 ${props.className ?? ""}`}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`mt-1 w-full rounded-lg bg-transparent border border-neon-cyan/40 px-3 py-2 outline-none focus:ring-2 focus:ring-neon-cyan/40 ${props.className ?? ""}`}
    />
  );
}

function ProjectForm({
  onSubmit,
}: {
  onSubmit: (vals: Omit<Project, "id">) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("/placeholder.svg");
  const [technologies, setTechnologies] = useState("");
  return (
    <form
      className="grid gap-4 md:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          title,
          description,
          image,
          technologies: technologies
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
        });
      }}
    >
      <div className="md:col-span-2">
        <Label>Title</Label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project title"
        />
      </div>
      <div className="md:col-span-2">
        <Label>Description</Label>
        <Textarea
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short description"
        />
      </div>
      <div>
        <Label>Cover Image URL</Label>
        <Input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://..."
        />
      </div>
      <div>
        <Label>Technologies (comma-separated)</Label>
        <Input
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
          placeholder="PyTorch, LangChain, AWS"
        />
      </div>
      <div className="md:col-span-2">
        <button className="neon-btn w-full" type="submit">
          Add Project
        </button>
      </div>
    </form>
  );
}

function CertForm({
  onSubmit,
}: {
  onSubmit: (vals: Omit<Certification, "id">) => void;
}) {
  const [title, setTitle] = useState("");
  const [issuer, setIssuer] = useState("");
  const [date, setDate] = useState("");
  const [logoColor, setLogoColor] = useState("hsl(200,100%,60%)");
  return (
    <form
      className="grid gap-4 md:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ title, issuer, date, logoColor });
      }}
    >
      <div>
        <Label>Title</Label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Certification title"
        />
      </div>
      <div>
        <Label>Issuer</Label>
        <Input
          value={issuer}
          onChange={(e) => setIssuer(e.target.value)}
          placeholder="Organization"
        />
      </div>
      <div>
        <Label>Date</Label>
        <Input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="YYYY-MM-DD"
        />
      </div>
      <div>
        <Label>Logo Color</Label>
        <Input
          value={logoColor}
          onChange={(e) => setLogoColor(e.target.value)}
          placeholder="CSS color"
        />
      </div>
      <div className="md:col-span-2">
        <button className="neon-btn w-full" type="submit">
          Add Certification
        </button>
      </div>
    </form>
  );
}

function BlogForm({
  onSubmit,
}: {
  onSubmit: (vals: Omit<BlogPost, "id">) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("/placeholder.svg");
  const [date, setDate] = useState("");
  const [tags, setTags] = useState("");
  return (
    <form
      className="grid gap-4 md:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          title,
          description,
          image,
          date,
          tags: tags
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
        });
      }}
    >
      <div className="md:col-span-2">
        <Label>Title</Label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
        />
      </div>
      <div className="md:col-span-2">
        <Label>Description</Label>
        <Textarea
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short summary"
        />
      </div>
      <div>
        <Label>Cover Image URL</Label>
        <Input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://..."
        />
      </div>
      <div>
        <Label>Date</Label>
        <Input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="YYYY-MM-DD"
        />
      </div>
      <div className="md:col-span-2">
        <Label>Tags (comma-separated)</Label>
        <Input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="LLMs, RAG, MLOps"
        />
      </div>
      <div className="md:col-span-2">
        <button className="neon-btn w-full" type="submit">
          Add Post
        </button>
      </div>
    </form>
  );
}
