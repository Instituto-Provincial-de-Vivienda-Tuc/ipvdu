# Etapa de construcción
FROM node:18-alpine AS builder

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm ci

# Copiar código fuente
COPY . .

# Construir la aplicación (esto ya ejecuta la optimización)
RUN npm run build

# Etapa de instalación de dependencias de producción
FROM node:18-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production

# Etapa de producción
FROM node:18-alpine AS runner

# Establecer directorio de trabajo
WORKDIR /app

# Establecer variables de entorno
ENV NODE_ENV=production
ENV PORT=8080

# Copiar solo los archivos necesarios
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Eliminar archivos de caché y temporales para reducir tamaño
RUN find ./.next \( -name "*.js.map" -o -name "*.d.ts" \) -delete

# Exponer el puerto configurado
EXPOSE 8080

# Comando para iniciar la aplicación
CMD ["npm", "start"]