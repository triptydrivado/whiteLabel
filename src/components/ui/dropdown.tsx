import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

type DropdownProps = {
  trigger: React.ReactNode;
  items: { label: React.ReactNode; onClick: () => void; className?: string }[];
  dropdownClassName?: string;
  isOpen?: boolean;
  onToggle?: () => void;
  onClose?: () => void;
  style?: React.CSSProperties;
};

export function Dropdown({
  trigger,
  items,
  dropdownClassName = "",
  isOpen,
  onToggle,
  onClose,
}: DropdownProps) {
  return (
    <DropdownMenu.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (open) {
          onToggle?.();
        } else {
          onClose?.();
        }
      }}
    >
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Content
        className={` bg-white shadow-md rounded-md p-2 border ${dropdownClassName}`}
      >
        {items.map((item, index) => (
          <DropdownMenu.Item
            key={index}
            onClick={() => {
              item.onClick();
              onClose?.(); 
            }}
            className={`  hover:border hover:border-[#FB4156]  ${
              item.className || ""
            }`}
          >
            {item.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
