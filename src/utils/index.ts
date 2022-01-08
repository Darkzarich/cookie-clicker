import upgrades from '@/consts/upgrades.json';

interface IUpgrade {
  [key: string]: {
    name: string;
    price: number;
    effect: number;
    image: string;
  };
}

const getUpgrades = (): IUpgrade => {
  return upgrades;
};

const getUpgradeEffect = (upgradeKey: string): number => {
  return (upgrades as IUpgrade)[upgradeKey].effect;
};

export { getUpgrades, getUpgradeEffect };
