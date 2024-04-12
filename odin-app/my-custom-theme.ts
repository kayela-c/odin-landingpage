
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "var(--color-secondary-500)",
		"--theme-font-color-dark": "var(--color-primary-50)",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #3882f6 
		"--color-primary-50": "225 236 254", // #e1ecfe
		"--color-primary-100": "215 230 253", // #d7e6fd
		"--color-primary-200": "205 224 253", // #cde0fd
		"--color-primary-300": "175 205 251", // #afcdfb
		"--color-primary-400": "116 168 249", // #74a8f9
		"--color-primary-500": "56 130 246", // #3882f6
		"--color-primary-600": "50 117 221", // #3275dd
		"--color-primary-700": "42 98 185", // #2a62b9
		"--color-primary-800": "34 78 148", // #224e94
		"--color-primary-900": "27 64 121", // #1b4079
		// secondary | #1f2937 
		"--color-secondary-50": "221 223 225", // #dddfe1
		"--color-secondary-100": "210 212 215", // #d2d4d7
		"--color-secondary-200": "199 202 205", // #c7cacd
		"--color-secondary-300": "165 169 175", // #a5a9af
		"--color-secondary-400": "98 105 115", // #626973
		"--color-secondary-500": "31 41 55", // #1f2937
		"--color-secondary-600": "28 37 50", // #1c2532
		"--color-secondary-700": "23 31 41", // #171f29
		"--color-secondary-800": "19 25 33", // #131921
		"--color-secondary-900": "15 20 27", // #0f141b
		// tertiary | #e5e7eb 
		"--color-tertiary-50": "251 251 252", // #fbfbfc
		"--color-tertiary-100": "250 250 251", // #fafafb
		"--color-tertiary-200": "249 249 250", // #f9f9fa
		"--color-tertiary-300": "245 245 247", // #f5f5f7
		"--color-tertiary-400": "237 238 241", // #edeef1
		"--color-tertiary-500": "229 231 235", // #e5e7eb
		"--color-tertiary-600": "206 208 212", // #ced0d4
		"--color-tertiary-700": "172 173 176", // #acadb0
		"--color-tertiary-800": "137 139 141", // #898b8d
		"--color-tertiary-900": "112 113 115", // #707173
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #303f54 
		"--color-surface-50": "224 226 229", // #e0e2e5
		"--color-surface-100": "214 217 221", // #d6d9dd
		"--color-surface-200": "203 207 212", // #cbcfd4
		"--color-surface-300": "172 178 187", // #acb2bb
		"--color-surface-400": "110 121 135", // #6e7987
		"--color-surface-500": "48 63 84", // #303f54
		"--color-surface-600": "43 57 76", // #2b394c
		"--color-surface-700": "36 47 63", // #242f3f
		"--color-surface-800": "29 38 50", // #1d2632
		"--color-surface-900": "24 31 41", // #181f29
		
	}
}