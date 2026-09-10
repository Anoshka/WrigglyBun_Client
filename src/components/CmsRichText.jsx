import { Link } from "react-router-dom";

function isInternalHref(href) {
  if (!href) return false;
  return href.startsWith("/") && !href.startsWith("//");
}

function LinkMark({ href, children }) {
  if (isInternalHref(href)) {
    return (
      <Link to={href} className="cms-rich-text__link">
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className="cms-rich-text__link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function renderBlockChildren(block) {
  const markDefs = Object.fromEntries(
    (block.markDefs || []).map((def) => [def._key, def])
  );

  return (block.children || []).map((child, i) => {
    if (typeof child === "string") return child;
    if (!child || child._type !== "span") return null;

    let node = child.text || "";
    const marks = child.marks || [];
    const key = child._key || i;

    for (const mark of marks) {
      const def = markDefs[mark];
      if (def?.href) {
        node = (
          <LinkMark key={`${key}-a`} href={def.href}>
            {node}
          </LinkMark>
        );
      } else if (mark === "strong") {
        node = <strong key={`${key}-b`}>{node}</strong>;
      } else if (mark === "em") {
        node = <em key={`${key}-i`}>{node}</em>;
      }
    }

    return <span key={key}>{node}</span>;
  });
}

function Block({ block }) {
  const children = renderBlockChildren(block);
  if (block.style === "h3") return <h3>{children}</h3>;
  return <p>{children}</p>;
}

export default function CmsRichText({ value, className }) {
  if (!value) return null;

  if (typeof value === "string") {
    return (
      <div className={className}>
        {value.split("\n").map((p, i) => (p.trim() ? <p key={i}>{p}</p> : null))}
      </div>
    );
  }

  if (!Array.isArray(value) || value.length === 0) return null;

  return (
    <div className={className}>
      {value.map((block, i) =>
        block?._type === "block" ? (
          <Block key={block._key || i} block={block} />
        ) : null
      )}
    </div>
  );
}
