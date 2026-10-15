import React from "react";
import {
  Scissors,
  Sparkles,
  Shirt,
  Layers,
  Crown,
  Wrench,
  HeartHandshake,
  Ruler,
  CheckCircle2,
  Cpu,
  Clock,
  BadgePercent,
  Smile,
  Phone,
  MessageCircle,
  MapPin,
  Star,
  ExternalLink,
  Download,
  Share2,
  Calendar,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Menu,
  Check,
  Copy,
  Navigation,
} from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function LucideIcon({ name, className = "w-5 h-5", size }: LucideIconProps) {
  const props = { className, size };

  switch (name) {
    case "Scissors":
      return <Scissors {...props} />;
    case "Sparkles":
      return <Sparkles {...props} />;
    case "Shirt":
      return <Shirt {...props} />;
    case "Layers":
      return <Layers {...props} />;
    case "Crown":
      return <Crown {...props} />;
    case "Wrench":
      return <Wrench {...props} />;
    case "HeartHandshake":
      return <HeartHandshake {...props} />;
    case "Ruler":
      return <Ruler {...props} />;
    case "CheckCircle2":
      return <CheckCircle2 {...props} />;
    case "Cpu":
      return <Cpu {...props} />;
    case "Clock":
      return <Clock {...props} />;
    case "BadgePercent":
      return <BadgePercent {...props} />;
    case "Smile":
      return <Smile {...props} />;
    case "Phone":
      return <Phone {...props} />;
    case "MessageCircle":
      return <MessageCircle {...props} />;
    case "MapPin":
      return <MapPin {...props} />;
    case "Star":
      return <Star {...props} />;
    case "ExternalLink":
      return <ExternalLink {...props} />;
    case "Download":
      return <Download {...props} />;
    case "Share2":
      return <Share2 {...props} />;
    case "Calendar":
      return <Calendar {...props} />;
    case "Eye":
      return <Eye {...props} />;
    case "X":
      return <X {...props} />;
    case "ChevronLeft":
      return <ChevronLeft {...props} />;
    case "ChevronRight":
      return <ChevronRight {...props} />;
    case "Menu":
      return <Menu {...props} />;
    case "Check":
      return <Check {...props} />;
    case "Copy":
      return <Copy {...props} />;
    case "Navigation":
      return <Navigation {...props} />;
    default:
      return <Sparkles {...props} />;
  }
}
