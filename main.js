import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import { createClient } from '@supabase/supabase-js';
cytoscape.use(dagre);
window.cytoscape=cytoscape;
window.createSupabaseClient=createClient;
await import('./app.js');
