import urllib.parse

def encode_svg_to_url(svg_file_path):
    with open(svg_file_path, 'r') as file:
        svg_content = file.read()

    # Encode SVG content
    encoded_svg = urllib.parse.quote(svg_content)

    # Format as data URI
    data_uri = f"data:image/svg+xml,{encoded_svg}"

    return data_uri

def save_encoded_url_to_file(encoded_url, output_file):
    with open(output_file, 'w') as file:
        file.write(encoded_url)
    print(f"Encoded URL saved to {output_file}")

# Example usage
if __name__ == "__main__":
    svg_path = "C:/Users/user1/Desktop/engineering/web wonders project/images/svgs/world4-prev.svg"
    output_file = "C:/Users/user1/Desktop/engineering/web wonders project/encoded_svg_url3.txt"

    encoded_url = encode_svg_to_url(svg_path)
    save_encoded_url_to_file(encoded_url, output_file)
