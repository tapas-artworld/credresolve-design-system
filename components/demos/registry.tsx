import * as I from "./inputs";
import * as O from "./overlays";
import * as N from "./navigation";
import * as D from "./display";

export type Entry = { id: string; title: string; figma?: string; description: string; Demo: () => React.JSX.Element };
export type Group = { id: string; title: string; items: Entry[] };

// figma = node id of the component's page in the "CR Design System" file.
export const groups: Group[] = [
  {
    id: "layout-navigation",
    title: "Layout & navigation",
    items: [
      { id: "sidebar", title: "Sidebar", figma: "2844-3", description: "The app frame for CredResolve OS products. Collapses to icons.", Demo: N.SidebarDemo },
      { id: "breadcrumb", title: "Breadcrumb", figma: "2814-11672", description: "Shows where the current page sits in the hierarchy.", Demo: N.BreadcrumbDemo },
      { id: "navigation-menu", title: "Navigation Menu", figma: "2819-28229", description: "Top-level site navigation with rich dropdown panels.", Demo: N.NavigationMenuDemo },
      { id: "menubar", title: "Menubar", figma: "2819-27754", description: "Desktop-style menu bar for dense tools.", Demo: N.MenubarDemo },
      { id: "pagination", title: "Pagination", figma: "2819-28903", description: "Moves through long lists of borrowers or campaigns.", Demo: N.PaginationDemo },
      { id: "tabs", title: "Tabs", figma: "2819-31095", description: "Switches between related views of the same object.", Demo: N.TabsDemo },
      { id: "command", title: "Command", figma: "2819-22790", description: "Searchable command palette for quick actions.", Demo: N.CommandDemo },
    ],
  },
  {
    id: "forms-inputs",
    title: "Forms & inputs",
    items: [
      { id: "button", title: "Button", figma: "2814-11933", description: "One primary button per area. Text on primary is Twilight.", Demo: I.ButtonDemo },
      { id: "checkbox", title: "Checkbox", figma: "2819-21779", description: "Turns an independent option on or off.", Demo: I.CheckboxDemo },
      { id: "combobox", title: "Combobox", figma: "2819-22160", description: "Searchable select for long option lists.", Demo: I.ComboboxDemo },
      { id: "calendar", title: "Calendar", figma: "2819-19886", description: "Month grid for picking a date.", Demo: I.CalendarDemo },
      { id: "date-picker", title: "Date Picker", figma: "2819-23348", description: "Calendar in a popover, attached to a field.", Demo: I.DatePickerDemo },
      { id: "form", title: "Form", figma: "2819-26426", description: "Labels, help text and inline validation messages.", Demo: I.FormDemo },
      { id: "input", title: "Input", figma: "2819-27270", description: "Single-line text field. Always pair it with a visible label.", Demo: I.InputDemo },
      { id: "input-otp", title: "Input OTP", figma: "2819-27454", description: "One-time passcode entry for borrower and agent verification.", Demo: I.InputOTPDemo },
      { id: "label", title: "Label", figma: "2819-27710", description: "Accessible name for a form control.", Demo: I.LabelDemo },
      { id: "radio-group", title: "Radio Group", figma: "2819-29275", description: "Pick exactly one option from a short list.", Demo: I.RadioGroupDemo },
      { id: "select", title: "Select", figma: "2819-29971", description: "Pick one option from a list.", Demo: I.SelectDemo },
      { id: "slider", title: "Slider", figma: "2819-30565", description: "Choose a value within a range.", Demo: I.SliderDemo },
      { id: "switch", title: "Switch", figma: "2819-30732", description: "Turns a setting on or off immediately.", Demo: I.SwitchDemo },
      { id: "textarea", title: "Textarea", figma: "2819-31164", description: "Multi-line text, for notes and messages.", Demo: I.TextareaDemo },
      { id: "toggle", title: "Toggle", figma: "2819-31490", description: "A two-state button.", Demo: I.ToggleDemo },
      { id: "toggle-group", title: "Toggle Group", figma: "2819-31630", description: "A set of toggles, single or multiple choice.", Demo: I.ToggleGroupDemo },
    ],
  },
  {
    id: "overlays-feedback",
    title: "Overlays & feedback",
    items: [
      { id: "alert-dialog", title: "Alert Dialog", figma: "2814-11167", description: "Interrupts to confirm a consequential action.", Demo: O.AlertDialogDemo },
      { id: "dialog", title: "Dialog", figma: "2819-24560", description: "A focused task on top of the page.", Demo: O.DialogDemo },
      { id: "sheet", title: "Sheet", figma: "2819-30307", description: "Side panel for details without leaving the list.", Demo: O.SheetDemo },
      { id: "drawer", title: "Drawer", figma: "2819-24663", description: "Bottom panel, best on mobile.", Demo: O.DrawerDemo },
      { id: "popover", title: "Popover", figma: "2819-29025", description: "Rich content anchored to a trigger.", Demo: O.PopoverDemo },
      { id: "hover-card", title: "Hover Card", figma: "2819-27160", description: "Preview content on hover or focus.", Demo: O.HoverCardDemo },
      { id: "tooltip", title: "Tooltip", figma: "2819-31792", description: "Names an icon-only control.", Demo: O.TooltipDemo },
      { id: "dropdown-menu", title: "Dropdown Menu", figma: "2819-24797", description: "A list of actions from a button.", Demo: O.DropdownMenuDemo },
      { id: "context-menu", title: "Context Menu", figma: "2819-22693", description: "Actions on right-click.", Demo: O.ContextMenuDemo },
      { id: "toast", title: "Toast", figma: "2819-31364", description: "Brief, non-blocking status messages.", Demo: O.ToastDemo },
      { id: "sonner", title: "Sonner", figma: "2819-30654", description: "Stacked notifications for background events.", Demo: O.SonnerDemo },
    ],
  },
  {
    id: "data-display",
    title: "Data display",
    items: [
      { id: "accordion", title: "Accordion", figma: "2811-14410", description: "Stacked sections that expand one at a time.", Demo: D.AccordionDemo },
      { id: "alert", title: "Alert", figma: "2813-9373", description: "Inline message for important information.", Demo: D.AlertDemo },
      { id: "aspect-ratio", title: "Aspect Ratio", figma: "2814-11221", description: "Keeps media at a fixed ratio.", Demo: D.AspectRatioDemo },
      { id: "avatar", title: "Avatar", figma: "2814-11240", description: "A person or organisation, with initials fallback.", Demo: D.AvatarDemo },
      { id: "badge", title: "Badge", figma: "2814-11330", description: "Status at a glance in tables and lists.", Demo: D.BadgeDemo },
      { id: "card", title: "Card", figma: "2819-20398", description: "Groups related content and actions.", Demo: D.CardDemo },
      { id: "carousel", title: "Carousel", figma: "2819-21462", description: "Steps through a set of slides.", Demo: D.CarouselDemo },
      { id: "chart", title: "Chart", figma: "2819-21571", description: "Charts use chart-1 (Resolve Orange) for the series that matters.", Demo: D.ChartDemo },
      { id: "collapsible", title: "Collapsible", figma: "2819-22060", description: "Shows and hides extra content.", Demo: D.CollapsibleDemo },
      { id: "data-table", title: "Data Table", figma: "2819-23090", description: "Table with filtering, sorting and row selection.", Demo: D.DataTableDemo },
      { id: "progress", title: "Progress", figma: "2819-29134", description: "Shows how far a task has run.", Demo: D.ProgressDemo },
      { id: "resizable", title: "Resizable", figma: "2819-29536", description: "Panels the user can resize. Drag or use the arrow keys.", Demo: D.ResizableDemo },
      { id: "scroll-area", title: "Scroll Area", figma: "2819-29663", description: "Scrolls content inside a fixed area.", Demo: D.ScrollAreaDemo },
      { id: "separator", title: "Separator", figma: "2819-30252", description: "Divides content visually.", Demo: D.SeparatorDemo },
      { id: "skeleton", title: "Skeleton", figma: "2819-30510", description: "Placeholder while content loads.", Demo: D.SkeletonDemo },
      { id: "table", title: "Table", figma: "2819-30903", description: "Simple tabular data.", Demo: D.TableDemo },
    ],
  },
];

export const componentCount = groups.reduce((n, g) => n + g.items.length, 0);
