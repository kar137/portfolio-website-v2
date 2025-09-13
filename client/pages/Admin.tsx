import { useState } from "react";
import { useContent } from "@/store/content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Project } from "@/components/sections/Projects";
import type { Certification } from "@/components/sections/Certifications";
import type { BlogPost } from "@/components/sections/Blog";

const ADMIN_FLAG = "admin.authed";
const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS || "admin";

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean>(
    () => localStorage.getItem(ADMIN_FLAG) === "1",
  );
  const [password, setPassword] = useState("");
  const content = useContent();

  if (!authed) {
    return (
      <div className="container py-20 max-w-md">
        <h1 className="section-title">Admin Sign In</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Protected area. One-time sign-in persists on this device.
        </p>
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (password === ADMIN_PASS) {
              localStorage.setItem(ADMIN_FLAG, "1");
              setAuthed(true);
            } else {
              alert("Invalid password");
            }
          }}
        >
          <div>
            <label className="text-sm text-muted-foreground">Password</label>
            <input
              type="password"
              className="mt-1 w-full rounded-lg bg-transparent border border-neon-cyan/40 px-3 py-2 outline-none focus:ring-2 focus:ring-neon-cyan/40"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="neon-btn w-full" type="submit">
            Sign In
          </button>
          <p className="text-xs text-muted-foreground">
            Tip: set VITE_ADMIN_PASS env for production.
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="flex items-center justify-between">
        <h1 className="section-title">Admin Interface</h1>
        <button
          className="neon-outline"
          onClick={() => {
            localStorage.removeItem(ADMIN_FLAG);
            setAuthed(false);
          }}
        >
          Sign Out
        </button>
      </div>
      <Tabs defaultValue="projects" className="mt-8">
        <TabsList className="glass">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="certs">Certifications</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <ProjectForm
            onSubmit={(vals) =>
              content.addProject({ id: crypto.randomUUID(), ...vals })
            }
          />
        </TabsContent>
        <TabsContent value="certs">
          <CertForm
            onSubmit={(vals) =>
              content.addCert({ id: crypto.randomUUID(), ...vals })
            }
          />
        </TabsContent>
        <TabsContent value="blog">
          <BlogForm
            onSubmit={(vals) =>
              content.addPost({ id: crypto.randomUUID(), ...vals })
            }
          />
        </TabsContent>
      </Tabs>
    </div>
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
      className="grid gap-4 md:grid-cols-2 mt-6"
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
        setTitle("");
        setDescription("");
        setImage("/placeholder.svg");
        setTechnologies("");
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
  const [logoUrl, setLogoUrl] = useState("");
  const [link, setLink] = useState("");
  return (
    <form
      className="grid gap-4 md:grid-cols-2 mt-6"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          title,
          issuer,
          date,
          logoUrl: logoUrl || undefined,
          link: link || undefined,
        });
        setTitle("");
        setIssuer("");
        setDate("");
        setLogoUrl("");
        setLink("");
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
        <Label>Logo URL</Label>
        <Input
          value={logoUrl}
          onChange={(e) => setLogoUrl(e.target.value)}
          placeholder="https://...svg"
        />
      </div>
      <div className="md:col-span-2">
        <Label>Credible Link</Label>
        <Input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="https://provider.com/certificate/..."
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
  const [content, setContent] = useState("");
  return (
    <form
      className="grid gap-4 md:grid-cols-2 mt-6"
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
          content,
        });
        setTitle("");
        setDescription("");
        setImage("/placeholder.svg");
        setDate("");
        setTags("");
        setContent("");
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
        <Label>Summary</Label>
        <Textarea
          rows={2}
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
        <Label>Full Post</Label>
        <Textarea
          rows={8}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write the full blog post here"
        />
      </div>
      <div className="md:col-span-2">
        <button className="neon-btn w-full" type="submit">
          Publish Post
        </button>
      </div>
    </form>
  );
}
