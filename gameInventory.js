// This is the file where you must work.
// Write code in the functions (and create new functions) so that they work
// according to the requirements.

const fs = require("fs");

// DEBUG CODE

const INVENTORY = {
    sword: 1,
    shield: 1,
    bombs: 6,
    torches: 12,
};

console.log("ADD ITEMS TO INVENTORY");

displayInventory(INVENTORY);
const itemsToAdd = ["sword", "rope", "candles", "meat"];
for (let i = 0; i < 100; i++) {
    itemsToAdd.push("coin");
}
console.log(itemsToAdd)
addToInventory(INVENTORY, itemsToAdd);
displayInventory(INVENTORY);

console.log("IMPORT CSV FILE");

displayInventory(INVENTORY);
console.log("---");
importInventory(INVENTORY, "test_inventory.csv");
displayInventory(INVENTORY);

/**
 * Display the contents of the inventory in a simple way.
 * @param {Record<string, number>} inventory
 */
function displayInventory(inventory) {
    for (const key in inventory) {
        console.log(`${key}: ${inventory[key]}`);
    }
}

/**
 * Add to the inventory Map a list of items from addedItems.
 */
function addToInventory(inventory, addedItems) {
    for (const key of addedItems) {
        // Increment existing item count
        if (key in inventory) {
            inventory[key] += 1;
        } else {
            inventory[key] = 1;
        }
    }
}

/**
 * Remove from the inventory dictionary a list of items from removedItems.
 */
function removeFromInventory(inventory, removedItems) {

}

/**
 * Display the contents of the inventory in an ordered, well-organized table with each column right-aligned.
 */
function printTable(inventory, order) {

}

/**
 * Import new inventory items from a CSV file.
 */
function importInventory(inventory, filename) {
    if (!filename) {
        filename = "import_inventory.csv";
    }

    if (!fs.existsSync(filename)) {
        console.error(`File '${filename}' not found!`);
    } else {

        const fileContent = fs.readFileSync(filename, {
            encoding: "utf8",
        });

        const splitContent = fileContent.split(",");
        addToInventory(inventory, splitContent);
    }
}

/**
 * Export the inventory into a CSV file.
 */
function exportInventory(inventory, filename) {
    // Use `fs.writeFileSync()`.
}

module.exports = {
    displayInventory,
    addToInventory,
    removeFromInventory,
    printTable,
    importInventory,
    exportInventory,
}
