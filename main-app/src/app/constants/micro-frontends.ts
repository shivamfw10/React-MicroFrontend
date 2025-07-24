export const MICRO_FRONTENDS = {
  NAVIGATION_UI: {
    remoteUrl: process.env.NEXT_PUBLIC_MICROUI_NAVIGATION_REMOTE_URL ?? '',
    scope: process.env.NEXT_PUBLIC_MICROUI_NAVIGATION_SCOPE ?? 'microui_navigation',
    module: process.env.NEXT_PUBLIC_MICROUI_NAVIGATION_MODULE ?? './bootstrap',
    mountFunction: process.env.NEXT_PUBLIC_MICROUI_NAVIGATION_MOUNT ?? 'renderMicrouiNavigation',
    containerId: 'micro-ui-navigation-container',
  },
  CONTENT_UI: {
    remoteUrl: process.env.NEXT_PUBLIC_MICROUI_CONTENT_REMOTE_URL ?? '',
    scope: process.env.NEXT_PUBLIC_MICROUI_CONTENT_SCOPE ?? 'microui_content',
    module: process.env.NEXT_PUBLIC_MICROUI_CONTENT_MODULE ?? './bootstrap',
    mountFunction: process.env.NEXT_PUBLIC_MICROUI_CONTENT_MOUNT ?? 'renderMicrouiContent',
    containerId: 'micro-ui-content-container',
  },
};
