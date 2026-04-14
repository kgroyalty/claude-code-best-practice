# Agent Registry - KG Royalty / Promura

## Available Agents
- @content-automation (OnlyFans, Instagram growth, AI influencer)
- @real-estate-lead (Phoenix/Scottsdale market leads)
- @n8n-orchestrator (N8N workflow trigger agent)
- @system-admin (VPS management - Hostinger KVM 2)
- @promura-agency (Promura client delivery agent)

## How to Invoke
/agent-activate @agent-name <task>

## Agent Permissions
- All agents: READ /root/claude-system/
- @system-admin: WRITE + EXECUTE on VPS
- @content-automation: External API (Instagram, OnlyFans)
- @real-estate-lead: Web scraping + CRM write
- @n8n-orchestrator: Webhook triggers only
