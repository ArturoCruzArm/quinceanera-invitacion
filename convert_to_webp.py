#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para convertir imágenes JPG a WebP con orientación correcta
"""
import os
import sys
import io
from pathlib import Path
from PIL import Image, ImageOps

# Configurar salida UTF-8 para Windows
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def convert_to_webp(input_path, output_dir, quality=85):
    """
    Convierte una imagen a WebP con orientación correcta

    Args:
        input_path: Path de la imagen de entrada
        output_dir: Directorio de salida
        quality: Calidad de compresión WebP (0-100)
    """
    try:
        # Abrir imagen
        img = Image.open(input_path)

        # Aplicar orientación EXIF automáticamente
        img = ImageOps.exif_transpose(img)

        # Convertir a RGB si es necesario (WebP no soporta algunos modos)
        if img.mode in ('RGBA', 'LA', 'P'):
            # Crear fondo blanco para transparencias
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
            img = background
        elif img.mode != 'RGB':
            img = img.convert('RGB')

        # Generar nombre de salida
        input_name = Path(input_path).stem
        output_path = Path(output_dir) / f"{input_name}.webp"

        # Guardar como WebP
        img.save(output_path, 'WEBP', quality=quality, method=6)

        print(f"✓ Convertido: {Path(input_path).name} -> {output_path.name}")
        return True

    except Exception as e:
        print(f"✗ Error convirtiendo {input_path}: {str(e)}")
        return False

def process_directory(input_dir, output_dir, extensions=('.jpg', '.jpeg', '.png')):
    """
    Procesa todas las imágenes de un directorio

    Args:
        input_dir: Directorio de entrada
        output_dir: Directorio de salida
        extensions: Tupla de extensiones a procesar
    """
    input_path = Path(input_dir)
    output_path = Path(output_dir)

    # Crear directorio de salida si no existe
    output_path.mkdir(parents=True, exist_ok=True)

    # Buscar todas las imágenes
    images = []
    for ext in extensions:
        images.extend(input_path.glob(f"*{ext}"))
        images.extend(input_path.glob(f"*{ext.upper()}"))

    total = len(images)
    if total == 0:
        print(f"⚠ No se encontraron imágenes en {input_dir}")
        return 0, 0

    print(f"\n📸 Procesando {total} imágenes de {input_dir}...")

    success = 0
    failed = 0

    for i, img_path in enumerate(images, 1):
        print(f"[{i}/{total}] ", end="")
        if convert_to_webp(img_path, output_path):
            success += 1
        else:
            failed += 1

    return success, failed

def main():
    # Directorio de origen
    source_dir = r"F:\2025\12\19\mago garcia"

    # Directorio de destino
    output_dir = r"d:\eventos\quinceanera-invitacion\fotos-webp"

    print("=" * 70)
    print("  Conversor de Imágenes a WebP - XV Años María Esther")
    print("=" * 70)

    if os.path.exists(source_dir):
        success, failed = process_directory(source_dir, output_dir)
    else:
        print(f"\n⚠ Directorio no encontrado: {source_dir}")
        return 1

    # Resumen final
    print("\n" + "=" * 70)
    print(f"  RESUMEN DE CONVERSIÓN")
    print("=" * 70)
    print(f"✓ Exitosas:  {success}")
    print(f"✗ Fallidas:  {failed}")
    print(f"📁 Destino:  {output_dir}")
    print("=" * 70)

    if success > 0:
        print(f"\n✓ {success} imágenes convertidas exitosamente a WebP")
        print(f"  Las imágenes están listas en: {output_dir}")

    return 0 if failed == 0 else 1

if __name__ == "__main__":
    sys.exit(main())
