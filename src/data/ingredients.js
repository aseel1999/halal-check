export const HALAL = 'halal';
export const HARAM = 'haram';
export const MASHBOOH = 'mashbooh';

export const ingredientsDB = [
  // === E-Numbers (Food Additives) ===
  { code: 'E100', name: 'كركمين', nameEn: 'Curcumin', status: HALAL, category: 'ملونات', description: 'مستخرج من نبات الكركم، آمن وحلال.', alternative: null },
  { code: 'E101', name: 'ريبوفلافين (فيتامين B2)', nameEn: 'Riboflavin', status: HALAL, category: 'ملونات', description: 'فيتامين B2، يُنتج صناعياً أو من مصادر نباتية.', alternative: null },
  { code: 'E102', name: 'تارترازين', nameEn: 'Tartrazine', status: HALAL, category: 'ملونات', description: 'ملون أصفر صناعي، مصدره كيميائي.', alternative: null },
  { code: 'E104', name: 'أصفر كينولين', nameEn: 'Quinoline Yellow', status: HALAL, category: 'ملونات', description: 'ملون أصفر صناعي.', alternative: null },
  { code: 'E110', name: 'أصفر غروب الشمس', nameEn: 'Sunset Yellow', status: HALAL, category: 'ملونات', description: 'ملون صناعي برتقالي-أصفر.', alternative: null },
  { code: 'E120', name: 'كارمين (قرمزي)', nameEn: 'Carmine / Cochineal', status: HARAM, category: 'ملونات', description: 'مستخرج من حشرة القرمز (الدودة القرمزية). حرام لأنه من مصدر حشري.', alternative: 'E162 (بيتانين من الشمندر) أو E160c (بابريكا)' },
  { code: 'E122', name: 'أزوروبين', nameEn: 'Azorubine', status: HALAL, category: 'ملونات', description: 'ملون أحمر صناعي.', alternative: null },
  { code: 'E127', name: 'إريثروسين', nameEn: 'Erythrosine', status: HALAL, category: 'ملونات', description: 'ملون أحمر صناعي.', alternative: null },
  { code: 'E129', name: 'أحمر ألورا', nameEn: 'Allura Red', status: HALAL, category: 'ملونات', description: 'ملون أحمر صناعي.', alternative: null },
  { code: 'E132', name: 'إنديغوتين', nameEn: 'Indigotine', status: HALAL, category: 'ملونات', description: 'ملون أزرق صناعي.', alternative: null },
  { code: 'E133', name: 'أزرق لامع', nameEn: 'Brilliant Blue', status: HALAL, category: 'ملونات', description: 'ملون أزرق صناعي.', alternative: null },
  { code: 'E140', name: 'كلوروفيل', nameEn: 'Chlorophyll', status: HALAL, category: 'ملونات', description: 'صبغة خضراء من النباتات.', alternative: null },
  { code: 'E141', name: 'مركبات نحاس الكلوروفيل', nameEn: 'Copper Chlorophyll', status: HALAL, category: 'ملونات', description: 'مشتق نباتي من الكلوروفيل.', alternative: null },
  { code: 'E150a', name: 'كراميل عادي', nameEn: 'Plain Caramel', status: HALAL, category: 'ملونات', description: 'سكر محمّص، حلال.', alternative: null },
  { code: 'E153', name: 'فحم نباتي', nameEn: 'Vegetable Carbon', status: HALAL, category: 'ملونات', description: 'كربون من مصادر نباتية.', alternative: null },
  { code: 'E160a', name: 'كاروتينات', nameEn: 'Carotenoids', status: HALAL, category: 'ملونات', description: 'أصباغ طبيعية من الجزر والنباتات.', alternative: null },
  { code: 'E160b', name: 'أناتو', nameEn: 'Annatto', status: HALAL, category: 'ملونات', description: 'ملون طبيعي من بذور شجرة الأناتو.', alternative: null },
  { code: 'E160c', name: 'بابريكا', nameEn: 'Paprika Extract', status: HALAL, category: 'ملونات', description: 'مستخرج من الفلفل الأحمر.', alternative: null },
  { code: 'E162', name: 'بيتانين', nameEn: 'Beetroot Red', status: HALAL, category: 'ملونات', description: 'ملون أحمر طبيعي من الشمندر.', alternative: null },
  { code: 'E163', name: 'أنثوسيانين', nameEn: 'Anthocyanins', status: HALAL, category: 'ملونات', description: 'أصباغ طبيعية من العنب والتوت.', alternative: null },
  { code: 'E170', name: 'كربونات الكالسيوم', nameEn: 'Calcium Carbonate', status: HALAL, category: 'ملونات', description: 'معدن طبيعي، يُستخدم كملون أبيض.', alternative: null },
  { code: 'E171', name: 'ثاني أكسيد التيتانيوم', nameEn: 'Titanium Dioxide', status: HALAL, category: 'ملونات', description: 'ملون أبيض معدني.', alternative: null },
  { code: 'E172', name: 'أكاسيد الحديد', nameEn: 'Iron Oxides', status: HALAL, category: 'ملونات', description: 'ملونات معدنية طبيعية.', alternative: null },

  // === Emulsifiers & Stabilizers ===
  { code: 'E322', name: 'ليسيثين', nameEn: 'Lecithin', status: MASHBOOH, category: 'مستحلبات', description: 'قد يكون من فول الصويا (حلال) أو من البيض. يجب التحقق من المصدر.', alternative: 'ليسيثين الصويا (حلال دائماً)' },
  { code: 'E330', name: 'حمض الستريك', nameEn: 'Citric Acid', status: HALAL, category: 'منظمات حموضة', description: 'حمض طبيعي موجود في الحمضيات، يُنتج صناعياً بالتخمير.', alternative: null },
  { code: 'E331', name: 'سترات الصوديوم', nameEn: 'Sodium Citrate', status: HALAL, category: 'منظمات حموضة', description: 'ملح حمض الستريك، مصدره نباتي/كيميائي.', alternative: null },
  { code: 'E332', name: 'سترات البوتاسيوم', nameEn: 'Potassium Citrate', status: HALAL, category: 'منظمات حموضة', description: 'ملح حمض الستريك.', alternative: null },
  { code: 'E333', name: 'سترات الكالسيوم', nameEn: 'Calcium Citrate', status: HALAL, category: 'منظمات حموضة', description: 'ملح حمض الستريك.', alternative: null },
  { code: 'E334', name: 'حمض الطرطريك', nameEn: 'Tartaric Acid', status: HALAL, category: 'منظمات حموضة', description: 'حمض طبيعي من العنب.', alternative: null },
  { code: 'E335', name: 'طرطرات الصوديوم', nameEn: 'Sodium Tartrate', status: HALAL, category: 'منظمات حموضة', description: 'ملح حمض الطرطريك.', alternative: null },
  { code: 'E336', name: 'طرطرات البوتاسيوم', nameEn: 'Potassium Tartrate', status: HALAL, category: 'منظمات حموضة', description: 'كريم التارتار، مصدره نباتي.', alternative: null },
  { code: 'E338', name: 'حمض الفوسفوريك', nameEn: 'Phosphoric Acid', status: HALAL, category: 'منظمات حموضة', description: 'حمض معدني، يُستخدم في المشروبات الغازية.', alternative: null },
  { code: 'E339', name: 'فوسفات الصوديوم', nameEn: 'Sodium Phosphate', status: HALAL, category: 'منظمات حموضة', description: 'ملح معدني.', alternative: null },
  
  { code: 'E400', name: 'حمض الألجينيك', nameEn: 'Alginic Acid', status: HALAL, category: 'مثخنات', description: 'مستخرج من الأعشاب البحرية.', alternative: null },
  { code: 'E401', name: 'ألجينات الصوديوم', nameEn: 'Sodium Alginate', status: HALAL, category: 'مثخنات', description: 'ملح حمض الألجينيك من الأعشاب البحرية.', alternative: null },
  { code: 'E406', name: 'أجار أجار', nameEn: 'Agar-Agar', status: HALAL, category: 'مثخنات', description: 'مستخرج من الطحالب البحرية، بديل حلال ممتاز للجيلاتين.', alternative: null },
  { code: 'E407', name: 'كاراجينان', nameEn: 'Carrageenan', status: HALAL, category: 'مثخنات', description: 'مستخرج من الأعشاب البحرية الحمراء.', alternative: null },
  { code: 'E410', name: 'صمغ الخروب', nameEn: 'Locust Bean Gum', status: HALAL, category: 'مثخنات', description: 'من بذور شجرة الخروب.', alternative: null },
  { code: 'E412', name: 'صمغ الغوار', nameEn: 'Guar Gum', status: HALAL, category: 'مثخنات', description: 'من بذور نبات الغوار.', alternative: null },
  { code: 'E414', name: 'صمغ عربي', nameEn: 'Gum Arabic / Acacia Gum', status: HALAL, category: 'مثخنات', description: 'من شجرة السنط/الأكاسيا، حلال 100%.', alternative: null },
  { code: 'E415', name: 'صمغ الزانثان', nameEn: 'Xanthan Gum', status: HALAL, category: 'مثخنات', description: 'يُنتج بالتخمير البكتيري، حلال.', alternative: null },
  { code: 'E416', name: 'صمغ الكارايا', nameEn: 'Karaya Gum', status: HALAL, category: 'مثخنات', description: 'من شجرة الكارايا.', alternative: null },
  { code: 'E418', name: 'صمغ الجيلان', nameEn: 'Gellan Gum', status: HALAL, category: 'مثخنات', description: 'يُنتج بالتخمير البكتيري.', alternative: null },
  { code: 'E420', name: 'سوربيتول', nameEn: 'Sorbitol', status: HALAL, category: 'محليات', description: 'كحول سكري من الذرة أو القمح.', alternative: null },
  { code: 'E421', name: 'مانيتول', nameEn: 'Mannitol', status: HALAL, category: 'محليات', description: 'كحول سكري من مصادر نباتية.', alternative: null },
  { code: 'E422', name: 'غليسيرول', nameEn: 'Glycerol', status: MASHBOOH, category: 'مستحلبات', description: 'قد يكون من مصادر نباتية (حلال) أو حيوانية (يجب التحقق). الغليسيرين النباتي حلال.', alternative: 'غليسيرول نباتي' },
  
  // === Critical Haram/Mashbooh Additives ===
  { code: 'E441', name: 'جيلاتين', nameEn: 'Gelatin', status: HARAM, category: 'مثخنات', description: 'مستخرج من عظام وجلود الحيوانات. حرام إلا إذا كان من مصدر حلال مذبوح شرعياً أو من الأسماك.', alternative: 'أجار أجار (E406)، بكتين (E440)، أو جيلاتين السمك' },
  { code: 'E440', name: 'بكتين', nameEn: 'Pectin', status: HALAL, category: 'مثخنات', description: 'من قشور الفواكه (تفاح، حمضيات). بديل حلال ممتاز للجيلاتين.', alternative: null },
  { code: 'E442', name: 'فوسفاتيد الأمونيوم', nameEn: 'Ammonium Phosphatides', status: MASHBOOH, category: 'مستحلبات', description: 'قد يحتوي على دهون حيوانية. يجب التحقق من المصدر.', alternative: 'ليسيثين الصويا (E322)' },
  
  { code: 'E470a', name: 'أملاح الأحماض الدهنية', nameEn: 'Sodium/Potassium Stearate', status: MASHBOOH, category: 'مستحلبات', description: 'الأحماض الدهنية قد تكون من مصادر حيوانية أو نباتية.', alternative: 'البحث عن المنتجات المصنّفة "نباتي"' },
  { code: 'E470b', name: 'ستيارات المغنيسيوم', nameEn: 'Magnesium Stearate', status: MASHBOOH, category: 'مستحلبات', description: 'حمض الستياريك قد يكون حيواني المصدر.', alternative: 'ستيارات المغنيسيوم النباتية' },
  { code: 'E471', name: 'أحادي وثنائي الغليسريد', nameEn: 'Mono- and Diglycerides', status: HARAM, category: 'مستحلبات', description: 'غالباً من دهون حيوانية (شحم الخنزير أو البقر غير المذبوح شرعياً). من أخطر المكونات المشبوهة!', alternative: 'E471 نباتي المصدر (يُكتب عادةً "من مصدر نباتي")' },
  { code: 'E472', name: 'إسترات الأحماض الدهنية', nameEn: 'Esters of Fatty Acids', status: MASHBOOH, category: 'مستحلبات', description: 'مشتقات الأحماض الدهنية، قد تكون حيوانية.', alternative: null },
  { code: 'E473', name: 'إسترات السكروز', nameEn: 'Sucrose Esters', status: MASHBOOH, category: 'مستحلبات', description: 'قد تحتوي على أحماض دهنية حيوانية.', alternative: null },
  { code: 'E474', name: 'سكروغليسريد', nameEn: 'Sucroglycerides', status: MASHBOOH, category: 'مستحلبات', description: 'مشتقات قد تكون من مصادر حيوانية.', alternative: null },
  { code: 'E475', name: 'إسترات متعددة الغليسريد', nameEn: 'Polyglycerol Esters', status: MASHBOOH, category: 'مستحلبات', description: 'من الغليسرول والأحماض الدهنية، يجب التحقق من المصدر.', alternative: null },
  { code: 'E476', name: 'بوليريسينوليات متعدد الغليسريد', nameEn: 'Polyglycerol Polyricinoleate', status: MASHBOOH, category: 'مستحلبات', description: 'يُستخدم في الشوكولاتة. الغليسرول قد يكون حيوانياً.', alternative: null },
  { code: 'E481', name: 'ستيارويل لاكتيلات الصوديوم', nameEn: 'Sodium Stearoyl Lactylate', status: MASHBOOH, category: 'مستحلبات', description: 'يحتوي على حمض الستياريك وحمض اللاكتيك، المصدر مشكوك فيه.', alternative: null },
  { code: 'E482', name: 'ستيارويل لاكتيلات الكالسيوم', nameEn: 'Calcium Stearoyl Lactylate', status: MASHBOOH, category: 'مستحلبات', description: 'مشابه لـ E481، يجب التحقق من مصدر الأحماض الدهنية.', alternative: null },
  { code: 'E483', name: 'طرطرات الستيريل', nameEn: 'Stearyl Tartrate', status: MASHBOOH, category: 'مستحلبات', description: 'يحتوي على كحول الستيريل الذي قد يكون حيوانياً.', alternative: null },
  { code: 'E491', name: 'سوربيتان مونوستيارات', nameEn: 'Sorbitan Monostearate', status: MASHBOOH, category: 'مستحلبات', description: 'حمض الستياريك قد يكون من مصدر حيواني.', alternative: null },
  
  // === Preservatives ===
  { code: 'E200', name: 'حمض السوربيك', nameEn: 'Sorbic Acid', status: HALAL, category: 'مواد حافظة', description: 'حافظ صناعي، حلال.', alternative: null },
  { code: 'E202', name: 'سوربات البوتاسيوم', nameEn: 'Potassium Sorbate', status: HALAL, category: 'مواد حافظة', description: 'حافظ شائع في الأطعمة والمشروبات، حلال.', alternative: null },
  { code: 'E210', name: 'حمض البنزويك', nameEn: 'Benzoic Acid', status: HALAL, category: 'مواد حافظة', description: 'حافظ طبيعي موجود في التوت البري.', alternative: null },
  { code: 'E211', name: 'بنزوات الصوديوم', nameEn: 'Sodium Benzoate', status: HALAL, category: 'مواد حافظة', description: 'ملح حمض البنزويك، حافظ شائع.', alternative: null },
  { code: 'E220', name: 'ثاني أكسيد الكبريت', nameEn: 'Sulphur Dioxide', status: HALAL, category: 'مواد حافظة', description: 'حافظ معدني، يُستخدم في الفواكه المجففة.', alternative: null },
  { code: 'E223', name: 'ميتابيسلفيت الصوديوم', nameEn: 'Sodium Metabisulphite', status: HALAL, category: 'مواد حافظة', description: 'حافظ ومضاد أكسدة معدني.', alternative: null },
  { code: 'E250', name: 'نتريت الصوديوم', nameEn: 'Sodium Nitrite', status: HALAL, category: 'مواد حافظة', description: 'حافظ يُستخدم في اللحوم المصنّعة. المادة حلال لكن تأكد أن اللحم نفسه حلال.', alternative: null },
  { code: 'E252', name: 'نترات البوتاسيوم', nameEn: 'Potassium Nitrate', status: HALAL, category: 'مواد حافظة', description: 'ملح البارود، يُستخدم كحافظ في اللحوم.', alternative: null },
  { code: 'E260', name: 'حمض الخليك', nameEn: 'Acetic Acid', status: HALAL, category: 'منظمات حموضة', description: 'الخل، حلال.', alternative: null },
  { code: 'E270', name: 'حمض اللاكتيك', nameEn: 'Lactic Acid', status: HALAL, category: 'منظمات حموضة', description: 'يُنتج بالتخمير البكتيري، عادة من مصادر نباتية.', alternative: null },
  { code: 'E280', name: 'حمض البروبيونيك', nameEn: 'Propionic Acid', status: HALAL, category: 'مواد حافظة', description: 'حافظ يُستخدم في الخبز.', alternative: null },
  { code: 'E282', name: 'بروبيونات الكالسيوم', nameEn: 'Calcium Propionate', status: HALAL, category: 'مواد حافظة', description: 'حافظ شائع في المخبوزات.', alternative: null },
  { code: 'E290', name: 'ثاني أكسيد الكربون', nameEn: 'Carbon Dioxide', status: HALAL, category: 'غازات', description: 'غاز طبيعي للتكربن.', alternative: null },
  { code: 'E300', name: 'حمض الأسكوربيك (فيتامين C)', nameEn: 'Ascorbic Acid', status: HALAL, category: 'مضادات أكسدة', description: 'فيتامين C، حلال.', alternative: null },
  { code: 'E301', name: 'أسكوربات الصوديوم', nameEn: 'Sodium Ascorbate', status: HALAL, category: 'مضادات أكسدة', description: 'ملح فيتامين C.', alternative: null },
  { code: 'E306', name: 'توكوفيرول (فيتامين E)', nameEn: 'Tocopherols', status: HALAL, category: 'مضادات أكسدة', description: 'فيتامين E من مصادر نباتية.', alternative: null },
  { code: 'E307', name: 'ألفا-توكوفيرول', nameEn: 'Alpha-Tocopherol', status: HALAL, category: 'مضادات أكسدة', description: 'فيتامين E.', alternative: null },
  { code: 'E310', name: 'بروبيل غالات', nameEn: 'Propyl Gallate', status: HALAL, category: 'مضادات أكسدة', description: 'مضاد أكسدة صناعي.', alternative: null },
  { code: 'E320', name: 'بوتيل هيدروكسيانيسول (BHA)', nameEn: 'BHA', status: HALAL, category: 'مضادات أكسدة', description: 'مضاد أكسدة صناعي.', alternative: null },
  { code: 'E321', name: 'بوتيل هيدروكسي تولوين (BHT)', nameEn: 'BHT', status: HALAL, category: 'مضادات أكسدة', description: 'مضاد أكسدة صناعي.', alternative: null },
  
  // === Sweeteners ===
  { code: 'E950', name: 'أسيسلفام البوتاسيوم', nameEn: 'Acesulfame K', status: HALAL, category: 'محليات', description: 'مُحلّي صناعي، حلال.', alternative: null },
  { code: 'E951', name: 'أسبارتام', nameEn: 'Aspartame', status: HALAL, category: 'محليات', description: 'مُحلّي صناعي، حلال.', alternative: null },
  { code: 'E952', name: 'سيكلامات', nameEn: 'Cyclamate', status: HALAL, category: 'محليات', description: 'مُحلّي صناعي.', alternative: null },
  { code: 'E953', name: 'إيزومالت', nameEn: 'Isomalt', status: HALAL, category: 'محليات', description: 'كحول سكري من السكروز.', alternative: null },
  { code: 'E954', name: 'سكرين', nameEn: 'Saccharin', status: HALAL, category: 'محليات', description: 'أقدم مُحلّي صناعي، حلال.', alternative: null },
  { code: 'E955', name: 'سكرالوز', nameEn: 'Sucralose', status: HALAL, category: 'محليات', description: 'مُحلّي مشتق من السكر، حلال.', alternative: null },
  { code: 'E957', name: 'ثوماتين', nameEn: 'Thaumatin', status: HALAL, category: 'محليات', description: 'بروتين مُحلّي طبيعي من فاكهة أفريقية.', alternative: null },
  { code: 'E960', name: 'ستيفيا', nameEn: 'Steviol Glycosides', status: HALAL, category: 'محليات', description: 'مُحلّي طبيعي من نبات الستيفيا.', alternative: null },
  { code: 'E965', name: 'مالتيتول', nameEn: 'Maltitol', status: HALAL, category: 'محليات', description: 'كحول سكري من النشا.', alternative: null },
  { code: 'E966', name: 'لاكتيتول', nameEn: 'Lactitol', status: HALAL, category: 'محليات', description: 'كحول سكري من اللاكتوز.', alternative: null },
  { code: 'E967', name: 'إكسيليتول', nameEn: 'Xylitol', status: HALAL, category: 'محليات', description: 'كحول سكري من خشب البتولا أو الذرة.', alternative: null },
  
  // === Other critical additives ===
  { code: 'E542', name: 'فوسفات العظام', nameEn: 'Bone Phosphate', status: HARAM, category: 'مضادات تكتل', description: 'مستخرج من عظام الحيوانات، حرام.', alternative: 'E341 (فوسفات الكالسيوم)' },
  { code: 'E570', name: 'حمض الستياريك', nameEn: 'Stearic Acid', status: MASHBOOH, category: 'مستحلبات', description: 'قد يكون من دهون حيوانية أو نباتية.', alternative: 'حمض الستياريك النباتي' },
  { code: 'E572', name: 'ستيارات المغنيسيوم', nameEn: 'Magnesium Stearate', status: MASHBOOH, category: 'مستحلبات', description: 'مصدر الستيارات قد يكون حيوانياً.', alternative: null },
  { code: 'E631', name: 'إينوزينات الصوديوم', nameEn: 'Sodium Inosinate', status: MASHBOOH, category: 'معززات نكهة', description: 'قد يكون من مصادر حيوانية (لحوم أو أسماك).', alternative: null },
  { code: 'E635', name: 'ريبونوكليوتيدات الصوديوم', nameEn: 'Sodium Ribonucleotides', status: MASHBOOH, category: 'معززات نكهة', description: 'خليط E627 وE631، قد يكون حيواني المصدر.', alternative: null },
  { code: 'E901', name: 'شمع العسل', nameEn: 'Beeswax', status: HALAL, category: 'مواد تلميع', description: 'من النحل، حلال عند أغلب العلماء.', alternative: null },
  { code: 'E904', name: 'شيلاك', nameEn: 'Shellac', status: MASHBOOH, category: 'مواد تلميع', description: 'إفراز حشرة اللاك. مختلف فيه بين العلماء.', alternative: 'شمع الكرنوبا (E903)' },
  { code: 'E920', name: 'إل-سيستين', nameEn: 'L-Cysteine', status: HARAM, category: 'محسنات دقيق', description: 'غالباً من شعر الإنسان أو ريش الطيور. بعضه من مصادر صناعية (حلال). يجب التحقق.', alternative: 'E920 صناعي المصدر' },
  { code: 'E966b', name: 'كحول', nameEn: 'Ethanol / Alcohol', status: HARAM, category: 'مذيبات', description: 'الكحول الإيثيلي محرّم في الإسلام كمادة مُسكرة.', alternative: null },

  // === Common Ingredients (non E-number) ===
  { code: null, name: 'جيلاتين', nameEn: 'Gelatin', status: HARAM, category: 'مثخنات', description: 'بروتين مستخرج من عظام وجلود الحيوانات. حرام إلا من مصدر حلال أو أسماك.', alternative: 'أجار أجار، بكتين الفاكهة، جيلاتين السمك' },
  { code: null, name: 'شحم الخنزير', nameEn: 'Lard', status: HARAM, category: 'دهون', description: 'دهن الخنزير، محرّم قطعاً.', alternative: 'زيت نباتي، زبدة، سمن' },
  { code: null, name: 'دهن خنزير', nameEn: 'Pork Fat', status: HARAM, category: 'دهون', description: 'أي دهن مشتق من الخنزير محرّم.', alternative: 'زيت زيتون، زيت جوز الهند' },
  { code: null, name: 'كحول إيثيلي', nameEn: 'Ethyl Alcohol', status: HARAM, category: 'مذيبات', description: 'مادة مُسكرة محرّمة.', alternative: null },
  { code: null, name: 'خمر', nameEn: 'Wine', status: HARAM, category: 'مشروبات', description: 'محرّم شرعاً.', alternative: 'خل التفاح أو عصير العنب' },
  { code: null, name: 'نبيذ', nameEn: 'Wine', status: HARAM, category: 'مشروبات', description: 'محرّم شرعاً.', alternative: 'خل أو عصير طبيعي' },
  { code: null, name: 'بيرة', nameEn: 'Beer', status: HARAM, category: 'مشروبات', description: 'مشروب كحولي محرّم.', alternative: 'بيرة بدون كحول (0.0%)' },
  { code: null, name: 'ويسكي', nameEn: 'Whiskey', status: HARAM, category: 'مشروبات', description: 'مشروب كحولي محرّم.', alternative: null },
  { code: null, name: 'روم', nameEn: 'Rum', status: HARAM, category: 'مشروبات', description: 'مشروب كحولي محرّم. نكهة الروم الصناعية حلال إذا خلت من الكحول.', alternative: 'نكهة روم صناعية بدون كحول' },
  { code: null, name: 'فانيليا طبيعية', nameEn: 'Vanilla Extract', status: MASHBOOH, category: 'نكهات', description: 'مستخلص الفانيليا الطبيعي يحتوي على نسبة كحول كمذيب. مختلف فيه.', alternative: 'فانيلين صناعي أو بودرة فانيليا' },
  { code: null, name: 'مستخلص الفانيليا', nameEn: 'Vanilla Extract', status: MASHBOOH, category: 'نكهات', description: 'يحتوي عادة على كحول إيثيلي كمذيب (35-40%).', alternative: 'فانيلين أو بودرة فانيليا' },
  { code: null, name: 'فانيلين', nameEn: 'Vanillin', status: HALAL, category: 'نكهات', description: 'نكهة فانيليا صناعية، حلال.', alternative: null },
  { code: null, name: 'إنفحة', nameEn: 'Rennet', status: MASHBOOH, category: 'إنزيمات', description: 'إنزيم لتخثير الحليب. الإنفحة الحيوانية يجب أن تكون من ذبيحة حلال. الإنفحة الميكروبية حلال.', alternative: 'إنفحة ميكروبية أو نباتية' },
  { code: null, name: 'منفحة', nameEn: 'Rennet', status: MASHBOOH, category: 'إنزيمات', description: 'نفس الإنفحة، يجب التحقق من المصدر.', alternative: 'إنفحة ميكروبية' },
  { code: null, name: 'كيراتين', nameEn: 'Keratin', status: MASHBOOH, category: 'بروتينات', description: 'بروتين من الشعر أو الريش، مصدره مشكوك.', alternative: null },
  { code: null, name: 'كولاجين', nameEn: 'Collagen', status: MASHBOOH, category: 'بروتينات', description: 'بروتين حيواني، يجب التحقق من مصدره (بقري حلال أو سمكي).', alternative: 'كولاجين بحري (من الأسماك)' },
  { code: null, name: 'بروتين مصل اللبن', nameEn: 'Whey Protein', status: MASHBOOH, category: 'بروتينات', description: 'حلال إذا لم يُستخدم إنفحة حيوانية في صنع الجبن الذي استُخرج منه.', alternative: 'بروتين مصل لبن حلال معتمد' },
  { code: null, name: 'ليسيثين الصويا', nameEn: 'Soy Lecithin', status: HALAL, category: 'مستحلبات', description: 'مستحلب نباتي من فول الصويا، حلال 100%.', alternative: null },
  { code: null, name: 'نشا', nameEn: 'Starch', status: HALAL, category: 'مثخنات', description: 'من الذرة أو البطاطا أو القمح، حلال.', alternative: null },
  { code: null, name: 'نشا الذرة', nameEn: 'Corn Starch', status: HALAL, category: 'مثخنات', description: 'نشا من الذرة، حلال.', alternative: null },
  { code: null, name: 'سكر', nameEn: 'Sugar', status: HALAL, category: 'محليات', description: 'سكروز من قصب السكر أو الشمندر، حلال.', alternative: null },
  { code: null, name: 'ملح', nameEn: 'Salt', status: HALAL, category: 'توابل', description: 'كلوريد الصوديوم، حلال.', alternative: null },
  { code: null, name: 'ماء', nameEn: 'Water', status: HALAL, category: 'سوائل', description: 'حلال.', alternative: null },
  { code: null, name: 'زيت نباتي', nameEn: 'Vegetable Oil', status: HALAL, category: 'زيوت', description: 'زيت من مصادر نباتية، حلال.', alternative: null },
  { code: null, name: 'زيت زيتون', nameEn: 'Olive Oil', status: HALAL, category: 'زيوت', description: 'زيت مبارك من شجرة الزيتون، حلال.', alternative: null },
  { code: null, name: 'زيت دوار الشمس', nameEn: 'Sunflower Oil', status: HALAL, category: 'زيوت', description: 'زيت نباتي حلال.', alternative: null },
  { code: null, name: 'زيت جوز الهند', nameEn: 'Coconut Oil', status: HALAL, category: 'زيوت', description: 'زيت نباتي حلال.', alternative: null },
  { code: null, name: 'زيت النخيل', nameEn: 'Palm Oil', status: HALAL, category: 'زيوت', description: 'زيت نباتي حلال.', alternative: null },
  { code: null, name: 'زبدة', nameEn: 'Butter', status: HALAL, category: 'دهون', description: 'من حليب البقر، حلال.', alternative: null },
  { code: null, name: 'حليب', nameEn: 'Milk', status: HALAL, category: 'ألبان', description: 'حلال.', alternative: null },
  { code: null, name: 'لبن', nameEn: 'Yogurt', status: HALAL, category: 'ألبان', description: 'حلال إذا لم يحتوِ على جيلاتين حيواني.', alternative: null },
  { code: null, name: 'جبن', nameEn: 'Cheese', status: MASHBOOH, category: 'ألبان', description: 'حلال إذا استُخدمت إنفحة ميكروبية أو نباتية. يجب التحقق من نوع الإنفحة.', alternative: 'أجبان بإنفحة ميكروبية' },
  { code: null, name: 'خل', nameEn: 'Vinegar', status: HALAL, category: 'توابل', description: 'الخل حلال حتى لو كان أصله من الكحول (تحوّل كيميائياً).', alternative: null },
  { code: null, name: 'خل التفاح', nameEn: 'Apple Cider Vinegar', status: HALAL, category: 'توابل', description: 'حلال.', alternative: null },
  { code: null, name: 'صلصة الصويا', nameEn: 'Soy Sauce', status: MASHBOOH, category: 'صلصات', description: 'بعض أنواعها تحتوي على كحول من التخمير. ابحث عن الأنواع الحلال.', alternative: 'صلصة صويا حلال أو تاماري' },
  { code: null, name: 'غلوتامات أحادية الصوديوم', nameEn: 'MSG / Monosodium Glutamate', status: HALAL, category: 'معززات نكهة', description: 'E621، يُنتج بالتخمير من مصادر نباتية، حلال.', alternative: null },
];

export function searchIngredients(query) {
  if (!query || query.trim().length === 0) return [];
  
  const normalizedQuery = query.trim().toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, '')  // remove Arabic diacritics
    .replace(/[أإآ]/g, 'ا')  // normalize alef variants
    .replace(/ة/g, 'ه')  // normalize taa marbuta
    .replace(/ى/g, 'ي');  // normalize alef maqsura

  return ingredientsDB.filter(ingredient => {
    const nameNormalized = ingredient.name.toLowerCase()
      .replace(/[\u064B-\u065F\u0670]/g, '')
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي');
    const nameEnNormalized = ingredient.nameEn.toLowerCase();
    const codeNormalized = (ingredient.code || '').toLowerCase();
    const descNormalized = ingredient.description.toLowerCase()
      .replace(/[\u064B-\u065F\u0670]/g, '')
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي');
    
    return nameNormalized.includes(normalizedQuery) ||
           nameEnNormalized.includes(normalizedQuery) ||
           codeNormalized.includes(normalizedQuery) ||
           descNormalized.includes(normalizedQuery);
  });
}

export function analyzeIngredientsList(text) {
  if (!text || text.trim().length === 0) return { results: [], overall: HALAL };
  
  const separators = /[,،;؛\n\r\t|/]+/;
  const items = text.split(separators)
    .map(item => item.trim())
    .filter(item => item.length > 0);
  
  const results = items.map(item => {
    const matches = searchIngredients(item);
    if (matches.length > 0) {
      return { query: item, found: true, ingredient: matches[0] };
    }
    return { query: item, found: false, ingredient: null };
  });

  let overall = HALAL;
  for (const result of results) {
    if (result.found) {
      if (result.ingredient.status === HARAM) {
        overall = HARAM;
        break;
      }
      if (result.ingredient.status === MASHBOOH) {
        overall = MASHBOOH;
      }
    }
  }

  return { results, overall };
}

export function getStatusInfo(status) {
  switch (status) {
    case HALAL:
      return { label: 'حلال', color: 'emerald', emoji: '✅', bgClass: 'bg-emerald-50', textClass: 'text-emerald-700', borderClass: 'border-emerald-200', badgeClass: 'bg-emerald-100 text-emerald-800' };
    case HARAM:
      return { label: 'حرام', color: 'red', emoji: '❌', bgClass: 'bg-red-50', textClass: 'text-red-700', borderClass: 'border-red-200', badgeClass: 'bg-red-100 text-red-800' };
    case MASHBOOH:
      return { label: 'مشتبه', color: 'amber', emoji: '⚠️', bgClass: 'bg-amber-50', textClass: 'text-amber-700', borderClass: 'border-amber-200', badgeClass: 'bg-amber-100 text-amber-800' };
    default:
      return { label: 'غير معروف', color: 'gray', emoji: '❓', bgClass: 'bg-gray-50', textClass: 'text-gray-700', borderClass: 'border-gray-200', badgeClass: 'bg-gray-100 text-gray-800' };
  }
}
