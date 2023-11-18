class InventoryManager {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = [];
    this.outOfStock = [];
  }

  addItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }
    if (this.capacity <= this.items.length) {
      throw new Error("The inventory is already full.");
    }
    let item = this.items.find((item) => item.itemName === itemName);
    if (item) {
      item.quantity += quantity;
    } else {
      this.items.push({ itemName, quantity });
    }

    return `Added ${quantity} ${itemName}(s) to the inventory.`;
  }

  sellItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    let item = this.items.find((i) => i.itemName === itemName);

    if (item === undefined) {
      throw new Error(
        `The item ${itemName} is not available in the inventory.`
      );
    }

    if (item.quantity < quantity) {
      throw new Error(`Not enough ${itemName}(s) in stock.`);
    }

    item.quantity -= quantity;

    if (item.quantity === 0) {
      this.items = this.items.filter((i) => i.itemName !== itemName);
      this.outOfStock.push(itemName);
    }

    return `Sold ${quantity} ${itemName}(s) from the inventory.`;
  }

  restockItem(itemName, quantity) {
    quantity = Number(quantity);

    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    let item = this.items.find((i) => i.itemName === itemName);
    if (item) {
      item.quantity += quantity;
    } else {
      this.items.push({ itemName, quantity });
    }

    let outOfStockIndex = this.outOfStock.indexOf(itemName);
    if (outOfStockIndex !== -1) {
      this.outOfStock.splice(outOfStockIndex, 1);
    }

    return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
  }

  getInventorySummary() {
    let summary = `Current Inventory:\n`;
    summary += `${this.items
      .map(({ itemName, quantity }) => `${itemName}: ${quantity}`)
      .join("\n")}`;
    if (this.outOfStock.length > 0) {
      summary += `\nOut of Stock: ${this.outOfStock.join(", ")}`;
    }
    return summary;
  }
}

const manager = new InventoryManager(2);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Level", 3));
