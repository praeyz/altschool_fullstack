function diffObjects(oldObj, newObj) {
  /*
   * 1. Create three empty objects: added, removed and changed.
   * 2. Loop through newObj: if a key is not in oldObj, it was added.
   * 3. Loop through oldObj: if a key is not in newObj, it was removed.
   * 4. If a key is in both but the value is different, it was changed.
   * 5. Return all three objects together.
   */
  let added = {};
  let removed = {};
  let changed = {};

  // Find keys that were added
  for (let key in newObj) {
    if (!(key in oldObj)) {
      added[key] = newObj[key];
    }
  }

  // Find keys that were removed or changed
  for (let key in oldObj) {
    if (!(key in newObj)) {
      removed[key] = oldObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      changed[key] = { from: oldObj[key], to: newObj[key] };
    }
  }

  return { added: added, removed: removed, changed: changed };
}
