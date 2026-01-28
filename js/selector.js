// ========================================
// GLOBAL VARIABLES
// ========================================
// Lista de fotos - 619 fotos válidas
const PHOTO_FILES = ['DJI_20251123_154752_363.webp', 'DJI_20251123_154830_763.webp', 'DJI_20251123_154847_278.webp', 'DJI_20251123_154907_649.webp', 'DJI_20251123_154910_513.webp', 'DJI_20251123_154914_984.webp', 'DJI_20251123_154917_143.webp', 'DJI_20251123_155002_323.webp', 'DJI_20251123_155005_412.webp', 'DJI_20251123_155037_213.webp', 'DJI_20251123_155045_375.webp', 'DJI_20251123_155050_115.webp', 'DJI_20251123_155207_770.webp', 'DJI_20251123_155211_399.webp', 'DJI_20251123_155214_175.webp', 'DJI_20251123_160519_285.webp', 'DJI_20251123_160527_956.webp', 'DJI_20251123_160532_426.webp', 'DJI_20251123_160538_216.webp', 'DJI_20251123_160541_934.webp', 'DJI_20251123_160929_934.webp', 'DJI_20251123_160932_439.webp', 'DJI_20251123_160935_229.webp', 'DJI_20251123_160937_944.webp', 'DJI_20251123_160942_023.webp', 'DJI_20251123_160944_889.webp', 'DJI_20251123_161529_300.webp', 'DJI_20251123_161533_182.webp', 'DJI_20251123_161535_764.webp', 'DJI_20251123_161539_124.webp', 'DJI_20251123_161612_275.webp', 'DJI_20251123_161614_645.webp', 'DJI_20251123_162257_504.webp', 'DJI_20251123_164048_965.webp', 'DJI_20251123_164057_711.webp', 'DJI_20251123_164102_211.webp', 'DJI_20251123_164104_773.webp', 'DJI_20251123_164107_612.webp', 'DJI_20251123_164110_071.webp', 'DJI_20251123_164112_456.webp', 'DJI_20251123_164115_336.webp', 'DJI_20251123_164118_381.webp', 'DJI_20251123_164121_321.webp', 'DJI_20251123_164126_811.webp', 'DJI_20251123_164132_884.webp', 'DJI_20251123_164136_783.webp', 'DJI_20251123_164139_935.webp', 'DJI_20251123_164142_425.webp', 'DJI_20251123_164144_720.webp', 'DJI_20251123_164147_060.webp', 'DJI_20251123_164149_205.webp', 'DJI_20251123_164151_755.webp', 'DJI_20251123_164154_515.webp', 'DJI_20251123_164156_958.webp', 'DJI_20251123_164159_914.webp', 'DJI_20251123_164206_425.webp', 'DJI_20251123_164208_914.webp', 'DJI_20251123_164212_964.webp', 'DJI_20251123_164215_155.webp', 'DJI_20251123_164218_064.webp', 'DJI_20251123_164223_014.webp', 'DJI_20251123_164230_019.webp', 'DJI_20251123_164234_219.webp', 'DJI_20251123_164240_819.webp', 'DJI_20251123_164244_748.webp', 'DJI_20251123_164247_345.webp', 'DJI_20251123_164249_518.webp', 'DJI_20251123_164251_979.webp', 'DJI_20251123_164254_242.webp', 'DJI_20251123_164257_664.webp', 'DJI_20251123_164300_018.webp', 'DJI_20251123_164302_059.webp', 'DJI_20251123_164305_074.webp', 'DJI_20251123_164307_669.webp', 'DJI_20251123_164310_473.webp', 'DJI_20251123_164334_940.webp', 'DJI_20251123_164342_273.webp', 'DJI_20251123_164344_582.webp', 'DJI_20251123_164349_937.webp', 'DJI_20251123_164352_788.webp', 'DJI_20251123_164356_043.webp', 'DJI_20251123_164359_672.webp', 'DJI_20251123_164402_116.webp', 'DJI_20251123_164405_162.webp', 'DJI_20251123_164407_172.webp', 'DJI_20251123_164410_532.webp', 'DJI_20251123_164412_975.webp', 'DJI_20251123_164416_096.webp', 'DJI_20251123_164419_966.webp', 'DJI_20251123_164423_178.webp', 'DJI_20251123_164426_432.webp', 'DJI_20251123_164430_422.webp', 'DJI_20251123_164433_405.webp', 'DJI_20251123_164437_246.webp', 'DJI_20251123_164444_040.webp', 'DJI_20251123_164446_876.webp', 'DJI_20251123_164449_758.webp', 'DJI_20251123155400_0009_D.webp', 'DJI_20251123155404_0010_D.webp', 'DJI_20251123155406_0011_D.webp', 'DJI_20251123155409_0012_D.webp', 'DJI_20251123155411_0013_D.webp', 'DJI_20251123155414_0014_D.webp', 'DJI_20251123155416_0015_D.webp', 'DJI_20251123155418_0016_D.webp', 'DJI_20251123155432_0017_D.webp', 'DJI_20251123155434_0018_D.webp', 'DJI_20251123155437_0019_D.webp', 'DJI_20251123155442_0020_D.webp', 'DJI_20251123155445_0021_D.webp', 'DJI_20251123162137_0022_D.webp', 'DJI_20251123162140_0023_D.webp', 'DJI_20251123162202_0024_D.webp', 'DJI_20251123162208_0025_D.webp', 'DJI_20251123162210_0026_D.webp', 'DJI_20251123162211_0027_D.webp', 'DJI_20251123162222_0028_D.webp', 'DJI_20251123162224_0029_D.webp', 'DJI_20251123162225_0030_D.webp', 'DJI_20251123164521_0031_D.webp', 'DJI_20251123164524_0032_D.webp', 'DJI_20251123164526_0033_D.webp', 'DJI_20251123164528_0034_D.webp', 'DJI_20251123164530_0035_D.webp', 'DJI_20251123164531_0036_D.webp', 'DJI_20251123164532_0037_D.webp', 'DJI_20251123164533_0038_D.webp', 'DJI_20251123164535_0039_D.webp', 'DJI_20251123164536_0040_D.webp', 'DJI_20251123164538_0041_D.webp', 'DJI_20251123164539_0042_D.webp', 'DJI_20251123164540_0043_D.webp', 'DJI_20251123164542_0044_D.webp', 'DJI_20251123164543_0045_D.webp', 'DJI_20251123164544_0046_D.webp', 'DJI_20251123164547_0047_D.webp', 'DJI_20251123164549_0048_D.webp', 'DJI_20251123164551_0049_D.webp', 'DJI_20251123164552_0050_D.webp', 'DJI_20251123164554_0051_D.webp', 'DJI_20251123164555_0052_D.webp', 'DJI_20251123164556_0053_D.webp', 'DJI_20251123164557_0054_D.webp', 'DJI_20251123164558_0055_D.webp', 'DJI_20251123164600_0056_D.webp', 'DJI_20251123164601_0057_D.webp', 'DJI_20251123164624_0058_D.webp', 'DJI_20251123164625_0059_D.webp', 'DJI_20251123164627_0060_D.webp', 'DJI_20251123164632_0061_D.webp', 'DJI_20251123164633_0062_D.webp', 'DJI_20251123164634_0063_D.webp', 'DJI_20251123164637_0064_D.webp', 'DJI_20251123164639_0065_D.webp', 'DJI_20251123164641_0066_D.webp', 'DJI_20251123164643_0067_D.webp', 'DJI_20251123164646_0068_D.webp', 'DJI_20251123164648_0069_D.webp', 'DJI_20251123164650_0070_D.webp', 'DJI_20251123164758_0071_D.webp', 'DJI_20251123164923_0072_D.webp', 'DJI_20251123165618_0073_D.webp', 'DJI_20251123165633_0074_D.webp', 'DJI_20251123165643_0075_D.webp', 'DJI_20251123165644_0076_D.webp', 'DJI_20251123165647_0077_D.webp', 'DJI_20251123165649_0078_D.webp', 'DJI_20251123165700_0079_D.webp', 'DJI_20251123165701_0080_D.webp', 'DSC_0001.webp', 'DSC_0002.webp', 'DSC_0003.webp', 'DSC_0004.webp', 'DSC_0005.webp', 'DSC_0006.webp', 'DSC_0007.webp', 'DSC_0008.webp', 'DSC_0009.webp', 'DSC_0010.webp', 'DSC_0011.webp', 'DSC_0012.webp', 'DSC_0013.webp', 'DSC_0014.webp', 'DSC_0015.webp', 'DSC_0016.webp', 'DSC_0017.webp', 'DSC_0018.webp', 'DSC_0019.webp', 'DSC_0020.webp', 'DSC_0021.webp', 'DSC_0022.webp', 'DSC_0023.webp', 'DSC_0024.webp', 'DSC_0025.webp', 'DSC_0026.webp', 'DSC_0027.webp', 'DSC_0028.webp', 'DSC_0029.webp', 'DSC_0030.webp', 'DSC_0031.webp', 'DSC_0032.webp', 'DSC_0033.webp', 'DSC_0034.webp', 'DSC_0035.webp', 'DSC_0036.webp', 'DSC_0037.webp', 'DSC_0038.webp', 'DSC_0039.webp', 'DSC_0040.webp', 'DSC_0041.webp', 'DSC_0042.webp', 'DSC_0043.webp', 'DSC_0044.webp', 'DSC_0045.webp', 'DSC_0046.webp', 'DSC_0047.webp', 'DSC_0048.webp', 'DSC_0049.webp', 'DSC_0050.webp', 'DSC_0051.webp', 'DSC_0052.webp', 'DSC_0053.webp', 'DSC_0054.webp', 'DSC_0055.webp', 'DSC_0056.webp', 'DSC_0057.webp', 'DSC_0058.webp', 'DSC_0059.webp', 'DSC_0060.webp', 'DSC_0061.webp', 'DSC_0062.webp', 'DSC_0063.webp', 'DSC_0064.webp', 'DSC_0065.webp', 'DSC_0066.webp', 'DSC_0067.webp', 'DSC_0068.webp', 'DSC_0069.webp', 'DSC_0070.webp', 'DSC_0071.webp', 'DSC_0072.webp', 'DSC_0073.webp', 'DSC_0074.webp', 'DSC_0075.webp', 'DSC_0076.webp', 'DSC_0077.webp', 'DSC_0078.webp', 'DSC_0079.webp', 'DSC_0080.webp', 'DSC_0081.webp', 'DSC_0082.webp', 'DSC_0083.webp', 'DSC_0084.webp', 'DSC_0085.webp', 'DSC_0086.webp', 'DSC_0087.webp', 'DSC_0088.webp', 'DSC_0089.webp', 'DSC_0090.webp', 'DSC_0091.webp', 'DSC_0092.webp', 'DSC_0093.webp', 'DSC_0094.webp', 'DSC_0095.webp', 'DSC_0096.webp', 'DSC_0097.webp', 'DSC_0098.webp', 'DSC_0099.webp', 'DSC_0100.webp', 'DSC_0101.webp', 'DSC_0102.webp', 'DSC_0103.webp', 'DSC_0104.webp', 'DSC_0105.webp', 'DSC_0106.webp', 'DSC_0107.webp', 'DSC_0108.webp', 'DSC_0109.webp', 'DSC_0110.webp', 'DSC_0111.webp', 'DSC_0112.webp', 'DSC_0113.webp', 'DSC_0114.webp', 'DSC_0115.webp', 'DSC_0116.webp', 'DSC_0117.webp', 'DSC_0118.webp', 'DSC_0119.webp', 'DSC_0120.webp', 'DSC_0121.webp', 'DSC_0122.webp', 'DSC_0123.webp', 'DSC_0124.webp', 'DSC_0128.webp', 'DSC_0132.webp', 'DSC_0134.webp', 'DSC_0137.webp', 'DSC_0138.webp', 'DSC_0140.webp', 'DSC_0141.webp', 'DSC_0142.webp', 'DSC_0144.webp', 'DSC_0145.webp', 'DSC_0146.webp', 'DSC_0147.webp', 'DSC_0151.webp', 'DSC_0153.webp', 'DSC_0154.webp', 'DSC_0155.webp', 'DSC_0156.webp', 'DSC_0158.webp', 'DSC_0159.webp', 'DSC_0160.webp', 'DSC_0161.webp', 'DSC_0162.webp', 'DSC_0163.webp', 'DSC_0164.webp', 'DSC_0165.webp', 'DSC_0166.webp', 'DSC_0167.webp', 'DSC_0168.webp', 'DSC_0169.webp', 'DSC_0170.webp', 'DSC_0171.webp', 'DSC_0172.webp', 'DSC_0173.webp', 'DSC_0174.webp', 'DSC_0175.webp', 'DSC_0176.webp', 'DSC_0177.webp', 'DSC_0178.webp', 'DSC_0180.webp', 'DSC_0181.webp', 'DSC_0182.webp', 'DSC_0183.webp', 'DSC_0184.webp', 'DSC_0185.webp', 'DSC_0186.webp', 'DSC_0187.webp', 'DSC_0188.webp', 'DSC_0189.webp', 'DSC_0190.webp', 'DSC_0191.webp', 'DSC_0192.webp', 'DSC_0193.webp', 'DSC_0194.webp', 'DSC_0195.webp', 'DSC_0196.webp', 'DSC_0197.webp', 'DSC_0198.webp', 'DSC_0199.webp', 'DSC_0200.webp', 'DSC_0201.webp', 'DSC_0202.webp', 'DSC_0203.webp', 'DSC_0204.webp', 'DSC_0205.webp', 'DSC_0206.webp', 'DSC_0207.webp', 'DSC_0208.webp', 'DSC_0209.webp', 'DSC_0210.webp', 'DSC_0211.webp', 'DSC_0212.webp', 'DSC_0213.webp', 'DSC_0214.webp', 'DSC_0215.webp', 'DSC_0216.webp', 'DSC_0217.webp', 'DSC_0218.webp', 'DSC_0219.webp', 'DSC_0220.webp', 'DSC_0221.webp', 'DSC_0222.webp', 'DSC_0223.webp', 'DSC_0224.webp', 'DSC_0225.webp', 'DSC_0226.webp', 'DSC_0227.webp', 'DSC_0228.webp', 'DSC_0229.webp', 'DSC_0230.webp', 'DSC_0231.webp', 'DSC_0232.webp', 'DSC_0233.webp', 'DSC_0234.webp', 'DSC_0235.webp', 'DSC_0236.webp', 'DSC_0237.webp', 'DSC_0238.webp', 'DSC_0239.webp', 'DSC_0240.webp', 'DSC_0241.webp', 'DSC_0242.webp', 'DSC_0243.webp', 'DSC_0244.webp', 'DSC_0245.webp', 'DSC_0246.webp', 'DSC_0247.webp', 'DSC_0248.webp', 'DSC_0249.webp', 'DSC_0250.webp', 'DSC_0251.webp', 'DSC_0252.webp', 'DSC_0253.webp', 'DSC_0254.webp', 'DSC_0255.webp', 'DSC_0256.webp', 'DSC_0257.webp', 'DSC_0258.webp', 'DSC_0259.webp', 'DSC_0260.webp', 'DSC_0261.webp', 'DSC_0262.webp', 'DSC_0263.webp', 'DSC_0264.webp', 'DSC_0265.webp', 'DSC_0266.webp', 'DSC_0267.webp', 'DSC_0268.webp', 'DSC_0269.webp', 'DSC_0270.webp', 'DSC_0271.webp', 'DSC_0272.webp', 'DSC_0273.webp', 'DSC_0274.webp', 'DSC_0275.webp', 'DSC_0276.webp', 'DSC_0277.webp', 'DSC_0278.webp', 'DSC_0279.webp', 'DSC_0280.webp', 'DSC_0281.webp', 'DSC_0282.webp', 'DSC_0283.webp', 'DSC_0284.webp', 'DSC_0285.webp', 'DSC_0286.webp', 'DSC_0287.webp', 'DSC_0288.webp', 'DSC_0289.webp', 'DSC_0290.webp', 'DSC_0291.webp', 'DSC_0292.webp', 'DSC_0293.webp', 'DSC_0294.webp', 'DSC_0295.webp', 'DSC_0296.webp', 'DSC_0297.webp', 'DSC_0298.webp', 'DSC_0299.webp', 'DSC_0300.webp', 'DSC_0301.webp', 'DSC_0302.webp', 'DSC_0303.webp', 'DSC_0304.webp', 'DSC_0305.webp', 'DSC_0306.webp', 'DSC_0307.webp', 'DSC_0308.webp', 'DSC_0309.webp', 'DSC_0310.webp', 'DSC_0311.webp', 'DSC_0312.webp', 'DSC_0313.webp', 'DSC_0314.webp', 'DSC_0315.webp', 'DSC_0316.webp', 'DSC_0317.webp', 'DSC_0318.webp', 'DSC_0319.webp', 'DSC_0320.webp', 'DSC_0321.webp', 'DSC_0322.webp', 'DSC_0323.webp', 'DSC_0324.webp', 'DSC_0325.webp', 'DSC_0326.webp', 'DSC_0327.webp', 'DSC_0328.webp', 'DSC_0329.webp', 'DSC_0330.webp', 'DSC_0331.webp', 'DSC_0332.webp', 'DSC_0333.webp', 'DSC_0334.webp', 'DSC_0335.webp', 'DSC_0336.webp', 'DSC_0337.webp', 'DSC_0338.webp', 'DSC_0339.webp', 'DSC_0340.webp', 'DSC_0341.webp', 'DSC_0342.webp', 'DSC_0343.webp', 'DSC_0344.webp', 'DSC_5375.webp', 'DSC_5376.webp', 'DSC_5377.webp', 'DSC_5378.webp', 'DSC_5379.webp', 'DSC_5380.webp', 'DSC_5381.webp', 'DSC_5382.webp', 'DSC_5383.webp', 'DSC_5384.webp', 'DSC_5385.webp', 'DSC_5386.webp', 'DSC_5387.webp', 'DSC_5388.webp', 'DSC_5389.webp', 'DSC_5390.webp', 'DSC_5391.webp', 'DSC_5392.webp', 'DSC_5393.webp', 'DSC_5394.webp', 'DSC_5395.webp', 'DSC_5396.webp', 'DSC_5397.webp', 'DSC_5398.webp', 'DSC_5399.webp', 'DSC_5400.webp', 'DSC_5401.webp', 'DSC_5402.webp', 'DSC_5403.webp', 'DSC_5404.webp', 'DSC_5405.webp', 'DSC_5406.webp', 'DSC_5407.webp', 'DSC_5408.webp', 'DSC_5409.webp', 'DSC_5410.webp', 'DSC_5411.webp', 'DSC_5412.webp', 'DSC_5413.webp', 'DSC_5414.webp', 'DSC_5415.webp', 'DSC_5416.webp', 'DSC_5417.webp', 'DSC_5418.webp', 'DSC_5419.webp', 'DSC_5420.webp', 'DSC_5421.webp', 'DSC_5422.webp', 'DSC_5423.webp', 'DSC_5424.webp', 'DSC_5425.webp', 'DSC_5426.webp', 'DSC_5427.webp', 'DSC_5428.webp', 'DSC_5429.webp', 'DSC_5430.webp', 'DSC_5431.webp', 'DSC_5432.webp', 'DSC_5433.webp', 'DSC_5434.webp', 'DSC_5435.webp', 'DSC_5436.webp', 'DSC_5437.webp', 'DSC_5438.webp', 'DSC_5439.webp', 'DSC_5440.webp', 'DSC_5441.webp', 'DSC_5442.webp', 'DSC_5443.webp', 'DSC_5444.webp', 'DSC_5445.webp', 'DSC_5446.webp', 'DSC_5447.webp', 'DSC_5448.webp', 'DSC_5449.webp', 'DSC_5450.webp', 'DSC_5451.webp', 'DSC_5452.webp', 'DSC_5453.webp', 'DSC_5454.webp', 'DSC_5455.webp', 'DSC_5456.webp', 'DSC_5457.webp', 'DSC_5458.webp', 'DSC_5459.webp', 'DSC_5460.webp', 'DSC_5461.webp', 'DSC_5462.webp', 'DSC_5463.webp', 'DSC_5464.webp', 'DSC_5465.webp', 'DSC_5466.webp', 'DSC_5467.webp', 'DSC_5468.webp', 'DSC_5469.webp', 'DSC_5470.webp', 'DSC_5471.webp', 'DSC_5472.webp', 'DSC_5473.webp', 'DSC_5474.webp', 'DSC_5475.webp', 'DSC_5476.webp', 'DSC_5477.webp', 'DSC_5478.webp', 'DSC_5479.webp', 'DSC_5480.webp', 'DSC_5481.webp', 'DSC_5482.webp', 'DSC_5483.webp', 'DSC_5484.webp', 'DSC_5485.webp', 'DSC_5486.webp', 'DSC_5487.webp', 'DSC_5488.webp', 'DSC_5489.webp', 'DSC_5490.webp', 'DSC_5491.webp', 'DSC_5492.webp', 'DSC_5493.webp', 'DSC_5494.webp', 'DSC_5495.webp', 'DSC_5496.webp', 'DSC_5497.webp'];

const photos = PHOTO_FILES.map(filename => `fotos/${filename}`);

// LIMITS FOR ISIS'S PACKAGE
const LIMITS = {
    impresion: 100,    // Máximo 80 fotos para impresión
    ampliacion: 1     // Máximo 1 foto para ampliación
    // redes_sociales: sin límite
    // web: sin límite
};

const STORAGE_KEY = 'maria_esther_xv_photo_selections';
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
            console.log('Selecciones cargadas desde localStorage:', photoSelections);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
        console.log('Selecciones guardadas en localStorage');
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás segura de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        redes_sociales: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.redes_sociales) stats.redes_sociales++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    // Update counters
    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countRedesSociales').textContent = stats.redes_sociales;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;

    // Add warning class if limits exceeded
    const ampliacionCard = document.querySelector('.stat-card.ampliacion');
    const impresionCard = document.querySelector('.stat-card.impresion');

    if (ampliacionCard) {
        if (stats.ampliacion > LIMITS.ampliacion) {
            ampliacionCard.classList.add('exceeded');
        } else {
            ampliacionCard.classList.remove('exceeded');
        }
    }

    if (impresionCard) {
        if (stats.impresion > LIMITS.impresion) {
            impresionCard.classList.add('exceeded');
        } else {
            impresionCard.classList.remove('exceeded');
        }
    }
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.redes_sociales || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        // Add category classes
        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.redes_sociales) categories.push('redes_sociales');
            
            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        // Build badges HTML
        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Fotolibro</span>';
            if (selection.redes_sociales) badgesHTML += '<span class="badge badge-redes-sociales">📱 Redes</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        card.innerHTML = `
            <div class="photo-image-container">
                <img src="${photo}" alt="Foto ${index + 1}" loading="lazy">
            </div>
            <div class="photo-number">Foto ${index + 1}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function isPhotoVisible(index) {
    const selection = photoSelections[index] || {};
    let show = false;

    switch (currentFilter) {
        case 'all':
            show = true;
            break;
        case 'ampliacion':
            show = selection.ampliacion === true;
            break;
        case 'impresion':
            show = selection.impresion === true;
            break;
        case 'redes_sociales':
            show = selection.redes_sociales === true;
            break;
case 'descartada':
            show = selection.descartada === true;
            break;
        case 'sin_clasificar':
            show = !selection.ampliacion && !selection.impresion && !selection.redes_sociales && !selection.descartada;
            break;
    }
    return show;
}

function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        card.classList.toggle('hidden', !isPhotoVisible(index));
    });
}

function setFilter(filter) {
    console.log('Setting filter to:', filter);
    currentFilter = filter;
    applyFilter();

    // Update button states
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion}/${LIMITS.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Fotolibro (${stats.impresion}/${LIMITS.impresion})`;
    document.getElementById('btnFilterRedesSociales').textContent = `Redes (${stats.redes_sociales})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

function findNextVisiblePhoto(startIndex, direction) {
    let newIndex = startIndex;
    const totalPhotos = photos.length;

    if (direction === 'next') {
        for (let i = startIndex + 1; i < totalPhotos; i++) {
            if (isPhotoVisible(i)) {
                return i;
            }
        }
    } else { // 'prev'
        for (let i = startIndex - 1; i >= 0; i--) {
            if (isPhotoVisible(i)) {
                return i;
            }
        }
    }

    return null;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    modalImage.src = photos[index];
    modalPhotoNumber.textContent = `Foto ${index + 1}`;

    // Load current selections
    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    // Update navigation button states
    updateNavigationButtons();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById('btnPrevPhoto');
    const btnNext = document.getElementById('btnNextPhoto');

    if (btnPrev && btnNext) {
        const prevIndex = findNextVisiblePhoto(currentPhotoIndex, 'prev');
        const nextIndex = findNextVisiblePhoto(currentPhotoIndex, 'next');

        btnPrev.disabled = prevIndex === null;
        btnPrev.style.opacity = prevIndex === null ? '0.3' : '1';
        btnPrev.style.cursor = prevIndex === null ? 'not-allowed' : 'pointer';

        btnNext.disabled = nextIndex === null;
        btnNext.style.opacity = nextIndex === null ? '0.3' : '1';
        btnNext.style.cursor = nextIndex === null ? 'not-allowed' : 'pointer';
    }
}

function hasUnsavedChanges() {
    if (currentPhotoIndex === null) return false;

    const savedSelection = photoSelections[currentPhotoIndex] || {};
    const currentSelection = {};
    document.querySelectorAll('.option-btn.selected').forEach(btn => {
        currentSelection[btn.dataset.category] = true;
    });

    const savedKeys = Object.keys(savedSelection).filter(k => savedSelection[k]);
    const currentKeys = Object.keys(currentSelection);

    if (savedKeys.length !== currentKeys.length) return true;

    const allKeys = new Set([...savedKeys, ...currentKeys]);

    for (const key of allKeys) {
        if (!!savedSelection[key] !== !!currentSelection[key]) {
            return true;
        }
    }

    return false;
}

function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    const proceed = () => {
        const newIndex = findNextVisiblePhoto(currentPhotoIndex, direction);

        if (newIndex !== null) {
            currentPhotoIndex = newIndex;
            const modalImage = document.getElementById('modalImage');
            const modalPhotoNumber = document.getElementById('modalPhotoNumber');

            modalImage.src = photos[newIndex];
            modalPhotoNumber.textContent = `Foto ${newIndex + 1}`;

            const selection = photoSelections[newIndex] || {};
            document.querySelectorAll('.option-btn').forEach(btn => {
                const category = btn.dataset.category;
                btn.classList.toggle('selected', selection[category] === true);
            });

            updateNavigationButtons();
        }
    };

    if (hasUnsavedChanges()) {
        if (confirm('¿Deseas guardar los cambios antes de continuar?')) {
            saveModalSelection(proceed);
        } else {
            proceed();
        }
    } else {
        proceed();
    }
}

function closeModal() {
    const doClose = () => {
        const modal = document.getElementById('photoModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        currentPhotoIndex = null;
    };

    if (hasUnsavedChanges()) {
        if (confirm('¿Deseas guardar los cambios antes de salir?')) {
            saveModalSelection(doClose);
        } else {
            doClose();
        }
    } else {
        doClose();
    }
}

function saveModalSelection(callback) {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    // Only save if there's at least one selection
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        // Remove from selections if nothing is selected
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    showToast('Selección guardada correctamente', 'success');

    if (callback && typeof callback === 'function') {
        callback();
    } else {
        closeModal();
    }
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        INSTRUCCIONES: '⚠️ IMPORTANTE: Por favor envía este archivo por WhatsApp al 4779203776',
        whatsapp: '4779203776',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.redes_sociales || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: PHOTO_FILES[index],
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                redes_sociales: selection.redes_sociales || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-isis-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('📥 Reporte descargado. ¡Envíalo por WhatsApp al 4779203776!', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '📸 SELECCIÓN DE FOTOS - XV AÑOS ISIS FRANCIA SARABI\n';
    summary += '═══════════════════════════════════════\n\n';
    summary += `📊 RESUMEN GENERAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   📱 Para redes sociales: ${stats.redes_sociales}\n`;
    summary += `   🌐 Para web: ${stats.web}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'redes_sociales', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        redes_sociales: '📱 REDES SOCIALES',
        web: '🌐 WEB',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;
    summary += `\n📱 WhatsApp: 477-920-3776\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = summary;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Resumen copiado al portapapeles', 'success');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved selections
    loadSelections();

    // Render gallery
    renderGallery();

    // Update stats
    updateStats();

    // Update filter buttons
    updateFilterButtons();

    // Filter buttons
    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterRedesSociales').addEventListener('click', () => setFilter('redes_sociales'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin_clasificar'));

    // Set data-filter attributes
    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterRedesSociales').dataset.filter = 'redes_sociales';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin_clasificar';

    // Set initial active filter
    document.getElementById('btnFilterAll').classList.add('active');

    // Action buttons
    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    // Modal controls
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const isCurrentlySelected = btn.classList.contains('selected');

            // If selecting descartada, deselect all others
            if (category === 'descartada' && !isCurrentlySelected) {
                document.querySelectorAll('.option-btn').forEach(b => {
                    if (b !== btn) b.classList.remove('selected');
                });
            }

            // If selecting any other, deselect descartada
            if (category !== 'descartada' && !isCurrentlySelected) {
                document.querySelector('.option-btn[data-category="descartada"]').classList.remove('selected');
            }

            btn.classList.toggle('selected');

            // Show warning if exceeding recommended limit
            if (!isCurrentlySelected && LIMITS[category]) {
                const stats = getStats();
                const futureCount = stats[category] + 1;
                if (futureCount > LIMITS[category]) {
                    const messages = {
                        impresion: `⚠️ Nota: Has seleccionado ${futureCount} fotos para impresión (se recomiendan ${LIMITS.impresion})`,
                        ampliacion: `⚠️ Nota: Has seleccionado ${futureCount} fotos para ampliación (se recomienda ${LIMITS.ampliacion})`
                    };
                    showToast(messages[category], 'warning');
                }
            }
        });
    });

    // Close modal on outside click
    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                navigatePhoto('next');
            }
        }
    });

    // Navigation button click handlers
    const btnPrevPhoto = document.getElementById('btnPrevPhoto');
    const btnNextPhoto = document.getElementById('btnNextPhoto');

    if (btnPrevPhoto) {
        btnPrevPhoto.addEventListener('click', (e) => {
            e.stopPropagation();
            navigatePhoto('prev');
        });
    }

    if (btnNextPhoto) {
        btnNextPhoto.addEventListener('click', (e) => {
            e.stopPropagation();
            navigatePhoto('next');
        });
    }

    console.log('Selector de fotos inicializado');
    console.log(`Total de fotos: ${photos.length}`);
});

// ========================================
// AUTO-SAVE ON VISIBILITY CHANGE
// ========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Página oculta - guardando selecciones...');
        saveSelections();
    }
});

// ========================================
// BEFORE UNLOAD WARNING
// ========================================
window.addEventListener('beforeunload', (e) => {
    saveSelections();
});

// ========================================
// PROTECCIÓN DE IMÁGENES
// ========================================
// Bloquear click derecho en todas las imágenes
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        showToast('Las imágenes están protegidas', 'warning');
        return false;
    }
});

// Prevenir arrastrar imágenes
document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Prevenir selección de imágenes
document.addEventListener('selectstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});
