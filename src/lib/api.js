/*
 * Lead submission client. Calls the secure Base44 backend function —
 * validation also runs server-side; the frontend validates first for
 * fast feedback but the server is the source of truth.
 */

const ENDPOINT =
  'https://superagent-d73eed69.base44.app/functions/cfsRoofingLeadSubmit';

export async function submitLead(payload) {
  let res;
  try {
    res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    return { ok: false, network: true };
  }

  let data = {};
  try {
    data = await res.json();
  } catch {
    /* fall through with defaults */
  }

  if (res.ok && data.ok) return { ok: true, leadId: data.leadId };
  if (res.status === 400 && data.errors) return { ok: false, errors: data.errors };
  return { ok: false, server: true };
}
