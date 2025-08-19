import { useToggle } from '../customHooks/useToggle';

export const UtilizeUseToggleHook = () => {
  const { isOn, toggle } = useToggle(false);

  return (
    /* your toggle function for the onClick method */
    <button data-testid="toggle-button" onClick={toggle}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
};
