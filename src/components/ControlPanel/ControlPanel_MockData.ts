import { vi } from "vitest";

const onClearSeatMap = vi.fn();
const onGenerate = vi.fn();
const onSelect = vi.fn(() => {
  return "airbus-a320";
});
const onCountTotals = vi.fn();

export const mockProps = {
  onClearSeatMap,
  onGenerate,
  onSelect,
  onCountTotals,
  isChecked: false,
};
