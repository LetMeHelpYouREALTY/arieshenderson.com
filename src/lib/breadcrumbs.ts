export const SITE_URL = "https://www.arieshenderson.com";

export type BreadcrumbParent = {
  name: string;
  path: string;
};

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export function buildBreadcrumbItems({
  path,
  pageName,
  parents = [],
  schemaPageName,
}: {
  path: string;
  pageName: string;
  parents?: BreadcrumbParent[];
  schemaPageName?: string;
}): BreadcrumbItem[] {
  const currentName = schemaPageName ?? pageName;
  const normalizedPath = path.replace(/^\/+/, "");

  return [
    { name: "Home", url: SITE_URL },
    ...parents.map((parent) => ({
      name: parent.name,
      url: `${SITE_URL}/${parent.path.replace(/^\/+/, "")}`,
    })),
    {
      name: currentName,
      url: `${SITE_URL}/${normalizedPath}`,
    },
  ];
}
