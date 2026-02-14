import AppImage from '@/components/ui/AppImage';

interface Partner {
  id: number;
  name: string;
  logo: string;
  alt: string;
  category: string;
}

const partners: Partner[] = [
{
  id: 1,
  name: 'Dell Technologies',
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1a820e373-1764492659826.png",
  alt: 'Dell Technologies logo on white background with blue circular design',
  category: 'Servers & Storage'
},
{
  id: 2,
  name: 'Cisco Systems',
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b495b3b2-1764492660504.png",
  alt: 'Cisco Systems logo featuring blue bridge design on white background',
  category: 'Networking'
},
{
  id: 3,
  name: 'HP Enterprise',
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_19e00eafe-1764492660371.png",
  alt: 'HP Enterprise logo with green and white color scheme',
  category: 'Infrastructure'
},
{
  id: 4,
  name: 'Fortinet',
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1869b4f9d-1764492660249.png",
  alt: 'Fortinet logo with red shield icon on white background',
  category: 'Security'
},
{
  id: 5,
  name: 'Synology',
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_132c45ef2-1764492661587.png",
  alt: 'Synology logo with orange and black branding',
  category: 'Storage Solutions'
},
{
  id: 6,
  name: 'VMware',
  logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10d79f028-1764492661829.png",
  alt: 'VMware logo with blue and gray color scheme',
  category: 'Virtualization'
}];


export default function VendorPartners() {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-lg font-semibold text-text-primary mb-6">Authorized Vendor Partners</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {partners.map((partner) =>
        <div
          key={partner.id}
          className="flex flex-col items-center p-4 bg-muted hover:bg-muted/80 rounded-lg transition-colors">

            <div className="w-full h-16 mb-3 overflow-hidden rounded-md bg-white flex items-center justify-center">
              <AppImage
              src={partner.logo}
              alt={partner.alt}
              className="w-full h-full object-contain p-2" />

            </div>
            <p className="text-sm font-semibold text-text-primary text-center mb-1">{partner.name}</p>
            <p className="text-xs text-muted-foreground text-center">{partner.category}</p>
          </div>
        )}
      </div>
    </div>);

}