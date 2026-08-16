import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ramp = [
  { l: 0, label: "Black" },
  { l: 0.1, label: "900" },
  { l: 0.2, label: "800" },
  { l: 0.3, label: "700" },
  { l: 0.4, label: "600" },
  { l: 0.5, label: "500" },
  { l: 0.6, label: "400" },
  { l: 0.7, label: "300" },
  { l: 0.8, label: "200" },
  { l: 0.9, label: "100" },
  { l: 1, label: "White" },
];

const typography = [
  { name: "display", className: "display" },
  { name: "h1", className: "h1" },
  { name: "h2", className: "h2" },
  { name: "h3", className: "h3" },
  { name: "h4", className: "h4" },
  { name: "h5", className: "h5" },
  { name: "h6", className: "h6" },
  { name: "lead", className: "lead" },
  { name: "body", className: "body" },
  { name: "small", className: "small" },
  { name: "xs", className: "xs" },
  { name: "muted", className: "muted" },
  { name: "mono", className: "mono" },
  { name: "bold", className: "bold" },
  { name: "semibold", className: "semibold" },
  { name: "medium", className: "medium" },
];

const buttons = [
  { name: "btn btn-primary", className: "btn btn-primary", label: "Primary" },
  { name: "btn btn-secondary", className: "btn btn-secondary", label: "Secondary" },
  { name: "btn btn-outline", className: "btn btn-outline", label: "Outline" },
  { name: "btn btn-ghost", className: "btn btn-ghost", label: "Ghost" },
  { name: "btn btn-destructive", className: "btn btn-destructive", label: "Destructive" },
  { name: "btn btn-link", className: "btn btn-link", label: "Link" },
];

const sizes = [
  { name: "btn ... btn-sm", className: "btn btn-primary btn-sm", label: "Small" },
  { name: "btn ... (default)", className: "btn btn-primary", label: "Default" },
  { name: "btn ... btn-lg", className: "btn btn-primary btn-lg", label: "Large" },
  { name: "btn ... btn-icon", className: "btn btn-primary btn-icon", label: "Icon" },
];

const components = [
  {
    name: "card",
    render: (
      <div className="card">
        <h4 className="h4">Card title</h4>
        <p className="body mt-1">A simple card using the design system classes.</p>
      </div>
    ),
  },
  { name: "badge", render: <span className="badge">badge</span> },
  { name: "link", render: <a className="link" href="#">This is a link</a> },
];

const ClassRow = ({ name, children }) => (
  <div className="flex flex-wrap items-center gap-4 py-3">
    <code className="w-44 shrink-0 font-mono text-xs text-muted-foreground">{name}</code>
    <div className="flex flex-wrap items-center gap-2">{children}</div>
  </div>
);

const Section = ({ title, desc, children }) => (
  <section className="mb-12">
    <h2 className="h3 mb-1">{title}</h2>
    <p className="small mb-4">{desc}</p>
    <div className="divide-y divide-border rounded-lg border border-border px-4">
      {children}
    </div>
  </section>
);

const StyleGuide = () => {
  return (
    <div className="section">
      <header className="mb-12 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-8">
        <div>
          <p className="badge mb-4">Nest Components / Style Guide</p>
          <h1 className="display">Style Guide</h1>
          <p className="lead mt-3 max-w-2xl">
            Monochrome design system — pure black &amp; white with Geist typography.
            যেকোনো page-এ class name copy করে ব্যবহার করুন।
          </p>
        </div>
        <Button variant="outline">
          React Component <ArrowRight className="size-4" />
        </Button>
      </header>

      <Section title="Colors" desc="Black & white grayscale ramp (oklch, 0 chroma).">
        <div className="grid grid-cols-3 gap-2 py-4 sm:grid-cols-6 lg:grid-cols-11">
          {ramp.map((c) => (
            <div
              key={c.label}
              className="flex h-24 flex-col justify-end overflow-hidden rounded-md border border-border"
              style={{ backgroundColor: `oklch(${c.l} 0 0)` }}
            >
              <span
                className={`px-2 py-1 font-mono text-[10px] uppercase tracking-wide ${
                  c.l < 0.45 ? "text-white" : "text-black"
                }`}
              >
                {c.label}
              </span>
            </div>
          ))}
        </div>
        <ClassRow name="bg-black / bg-white">
          <div className="rounded-md bg-black px-4 py-2 text-sm text-white">Black #000000</div>
          <div className="rounded-md border border-border bg-white px-4 py-2 text-sm text-black">
            White #FFFFFF
          </div>
        </ClassRow>
      </Section>

      <Section title="Typography" desc="Geist Sans & Geist Mono.">
        {typography.map((t) => (
          <ClassRow key={t.name} name={t.name}>
            <span className={t.className}>{t.name}</span>
          </ClassRow>
        ))}
      </Section>

      <Section title="Buttons" desc="Variant গুলো (CSS class)।">
        {buttons.map((b) => (
          <ClassRow key={b.name} name={b.name}>
            <button className={b.className}>{b.label}</button>
          </ClassRow>
        ))}
        <ClassRow name="btn (disabled)">
          <button className="btn btn-primary" disabled>
            Disabled
          </button>
        </ClassRow>
      </Section>

      <Section title="Button Sizes" desc="সাইজ scale।">
        {sizes.map((s) => (
          <ClassRow key={s.name} name={s.name}>
            <button className={s.className}>
              {s.label === "Icon" ? <ArrowRight className="size-4" /> : s.label}
            </button>
          </ClassRow>
        ))}
      </Section>

      <Section
        title="React Components"
        desc="<Button /> component (components/ui/button)। একই variants — variant + size props।"
      >
        <ClassRow name='<Button />'>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </ClassRow>
        <ClassRow name='sizes'>
          <Button size="xs">xs</Button>
          <Button size="sm">sm</Button>
          <Button>default</Button>
          <Button size="lg">lg</Button>
          <Button size="icon"><ArrowRight className="size-4" /></Button>
        </ClassRow>
      </Section>

      <Section title="Form" desc="Label ও Input।">
        <ClassRow name="label + input">
          <div className="w-64">
            <label className="label" htmlFor="demo">Name</label>
            <input id="demo" className="input" placeholder="Enter your name" />
          </div>
        </ClassRow>
      </Section>

      <Section title="Components" desc="Card, Badge, Link।">
        {components.map((c) => (
          <ClassRow key={c.name} name={c.name}>
            {c.render}
          </ClassRow>
        ))}
      </Section>

      <Section title="Layout" desc="Container ও Divider।">
        <ClassRow name="section">
          <div className="w-full rounded-md border border-dashed border-border px-4 py-6">
            <span className="small">max-w-4xl · px-6 · py-12 · centered</span>
          </div>
        </ClassRow>
        <ClassRow name="divider">
          <hr className="divider my-2 w-full" />
        </ClassRow>
      </Section>
    </div>
  );
};

export default StyleGuide;
