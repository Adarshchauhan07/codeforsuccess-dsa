# UCPBBPOT Forced Decision Tree Module

Drop-in, framework-free ES module for your DSA project.

## Files
- `decision-tree.js`: all forced Yes/No nodes and validated leaves
- `decision-tree-component.js`: UI, traversal, backtracking, persistence and JSON export
- `decision-tree.css`: responsive PC/tablet/phone styling
- `demo.html`: working standalone demo

## Run the demo
Because this uses ES modules, serve the folder instead of opening `demo.html` with `file://`.

```bash
npx vite --host 0.0.0.0
```

Then open the local URL and navigate to `/demo.html`.

## Add to an existing Vite project
Copy the three module files into `src/decision-tree/`, then:

```html
<div id="decisionTree"></div>
```

```js
import './decision-tree/decision-tree.css';
import { UCPBBPOTDecisionTree } from './decision-tree/decision-tree-component.js';

new UCPBBPOTDecisionTree('#decisionTree', {
  storageKey: 'my-dsa-recognition-attempts',
  onComplete(record) {
    // Put this record inside your existing dsa_workspaces payload.
    workspace.recognitionAttempts ??= [];
    workspace.recognitionAttempts.push(record);
    saveWorkspace(workspace);
  }
});
```

## Integrate with existing Supabase JSON payload
No SQL or table change is required. Store records under:

```json
{
  "recognitionAttempts": [],
  "questions": []
}
```

Use `record.analysis.title` to connect manually, or add your canonical `questionId` before saving:

```js
onComplete(record) {
  record.questionId = activeQuestion.id;
  workspace.recognitionAttempts.push(record);
  saveWorkspace(workspace);
}
```

## Forced learning behavior
- All eight UCPBBPOT fields are mandatory by default.
- Pattern names remain hidden until a validated leaf.
- Every gate has Yes and No only.
- Every No descends to another factual gate or another family.
- Back undoes exactly one gate.
- The final record contains the complete path, result, data structure, why-to-choose, invariant, safe operation, and tests.

Set `requireAnalysis:false` only for development/testing, not normal learning mode.
