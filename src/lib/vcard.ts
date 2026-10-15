import { siteConfig } from "@/data/site.config";

export function generateVCardString(): string {
  const { business } = siteConfig;
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${business.name}`,
    `ORG:${business.name}`,
    `TITLE:${business.category}`,
    `TEL;TYPE=CELL,PREF:${business.phoneIntl}`,
    `TEL;TYPE=WORK:${business.phoneIntl}`,
    `ADR;TYPE=WORK,PREF:;;${business.address.doorNo}, ${business.address.street};${business.address.city};${business.address.state};${business.address.pincode};India`,
    `LABEL;TYPE=WORK:${business.address.fullAddress}`,
    `URL:${business.links.websiteUrl}`,
    `NOTE:${business.tagline.en} | Google 5.0 Star Rated Tailor | Plus Code: ${business.address.plusCode}`,
    "END:VCARD",
  ].join("\r\n");
}

export function downloadVCard(): void {
  const vcfData = generateVCardString();
  const blob = new Blob([vcfData], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Hiba_Ladies_Tailor_Raichur.vcf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
