import { useState } from 'react';
import { OldWay, NewWay, Switcher } from '@/components';
const forImage = `^XA
^LH0,0
^CI28

^FO260,30^GFA,30690,30690,62,jSFDgOFE,:jQ01,:,::::::jX02,,:::kQ08,,::jR08,,jQ01,,hV03F00FCC,hU01MFE7,hT063F9JF7FF3C,hT067PFE,hU07QFC,hT01RFECgI04,gM01gM0SFE,hS012TF,hS07UF8,I038hK0181FESF7C,I03hL03C3VFCgI0C,I07hL07E3VFE6,I07hL0783XF,I02hL0787XF8,hP071YFC,hP0E3YFC,hO0387YFE,hO038gFE,hO07gHFE,hO07gIF,hO0gJFC,hN03gJFC,I06hJ07gJFE,007ChJ07gKF8,:007CY01gJ0gLF8gH08,0068Q08gR0gLFW018800BC,0048hJ0gLFT080018C6038,03hL07gJFEM01038181C0018C6gJ04,0100ChI07gJFCI0203010381818001886gJ04,I01CW02gL0gJFCI02030301M0188,8003ChJ0gJFChL02,4081ChJ0gJF8hL02,6083CK01gN03O0gJF8gJ02gG02,6086L01gN03O0gJF8X021I06,EJ01gS03O0gJF8X063I06gH01,2001I01gQ01O0gJF8X021gK02004,100F8hJ07gIFC,1C0E18hI07IF803WFC,I0C0EhI0FFCJ0WFChJ0100C,001801hI0FF8J03QFJ07EhK011E,001hL0FFK01OFEK01EhK01B3,J02hJ0FEL03NFCL0E,J0FT01gO0FEL01NF8L07h01,I01FT01gO0FCM07MF8L07,I03F3004O021gO0F8M03MFCL038,I07F90383N03gP0DM017MFECK038,I07FD03CO031gN01DM07OFCK018,081FF8006O032gN01EM07OFEL08,183FFI026N07ER01V06M0QFL08,0A27FJ03N077R01V02M0QFL04,0C63F02019K06007FgO02L01PFEL04,1C63387018CJ073C3FC8gT01PFE8K04,1C031EIF8E0783F1E1FCgU07PFEC,DE0F0JF9C3D001I06gV0QFECK02,3FC7KFC61C001M08gQ01RFEK02,3FC3KFCEhJ01SFK02,1FC73FF3FFhK01SF,3F26K0FhK03SF8,3036J01F8hJ03QF8F8,303EJ01DC002hG033OFE08,303CI011DC003hJ03MFC,B9F80879BEhN01MFC,F7CI0181C0618hK03KF8,F7CJ0C1C061ChK03KF,E06006001C070ChK0LF,E03002I04S048gS01LF08hQ02,C01ChT01MF8hP061C,CF1EhU0MF8N043908gW020D,FF3FJ0C1hN01MF8O02gQ0CO0180E,7F8F8I0C1T018gQ017LFC8h01CM0207C0F,7FC7CI0CV0CgP01NFBFFEgX01CM03C08,7FE7CI0D8hL07RFO02gN018M03,FFE7C001F8J01O0EU018T0SFCN02hI04,FB7380011K038N0EU01T03SFEN02gY01I06,F9F14I01K01EJ0E0018L01gH03UFCgX061,FCF06J08K03I06F003J03I08gG0WFgU0700E3,7E7E60800E0030031F8FFE39J07gJ01WF8gT0600F6M0C0C,7F7C01C01FC010071F8FC7F8J06W01L03WFCgW0EE018I0203,FFEE71E1F3C008623CC7876003002W03L07WFEgU0107C03C21C21E,MF0878608603CE184gJ02K01YFgR020E18FC03801C212,LFE0CF8EJ03CEC0C03gN07YFCgQ037FF8FE4380203F,KFBJF84J01DCCN02gI07YFCgR043F8FE4380603F,F7NFE004070DC4I04J03gI0EYFCgR0E1F9FBC720602E,F71NF8I0701CFgH02O0CYFEgQ0421IFC0F02606CJ02FFDIFCJFDI0E01CFJ084I01gH03gFP03g0E338IF3F002018J02IFEFECKFI0E01FB8I0EC0C01Q01EO03gF8K07E038g0C270F97FFP02KFE4FBFFDI0C20F3C010C03CQ0100EI03K07gF82001E7F8gL0F91FF813I0DI06JF9E7F37F81C0C00FE0038003R011ECI03K0gGFE0011FF8gM067BFFCDF8F38800EJF9F3E13E0FDFF013E007C003S01F8I038I01PF3QF0090CgK06J0IFC8DF1F38020EJFCF3E18E3JF813E007CW04003038007gIF008gM07I01IFC1F83F38020EJFEE3E0843D9CFC1FC2078EL01N03C1FF83800gKF88gI03800701C1FCFC1F83F1J06FFEFFE7F38678C0F00C860E3E00318P07C1CFC1800gLFg01800180030FFDF8F8779FB8J02JF1JF8678C0E180800E3C001881O0F808FC1I0gKFEg018L011JFC8061D01C0136,JF1DFEFC278C0E3C0C38E78I080100CL04008781I07QF9RFEgN011FE7F88I0F01801E7,JF1BFCFC09CE1EFE1E38E801CL0CP018K0PFE3RFEgN0117C1F8J0701001E7EJF93FCFC19FF3IF9F19F807M0C2I011Q0PFC7QFEgO081FC1F88I038J0FFEKF3FEIFDFF3FFB8F19F80040401I06K08M02007OFCF3PFE0CgL0181EC1C8981E01J0F8EQFCF83FF18F8CB800E0C012006J04N0E007OFD81PFE118gN0801C81A1F86J071EOF1F0F87CF9CFCF200381C11E002S0E007PF01QF918gP043E18FF87J033EOF8E1FC7C39FFDFI030DC00EO0CK03C007PF00QF9gL08K0C1E30FF81J03F6PFEFFC7E38FFD3001B05C0073T038007OFE00QF98gJ01L081E700FCK01FELFDIFCFFC1FB8FFD3007B05E00638L042K038007OFE00QF988gJ01F0090013E006DK01FCPF8FFE0FF8FFE9007F8EC0F019001004628J018003OFE007OFB3CgL0C01J04I04C002001FCPF1IF0FFCFFE400638640183L0E7FCJ038003OFC007OFB38gN03I08J0CC4033C1FCKFCJF3IFC7JFE70041CEC018M0F7FF820038003OFC007OFB98gN01I08J0CFC0E7DBFCOFE7JF7JFE386C1FE80E406K037FF060808001OF8007OF318gR0C1E31CFC1CF7FFERF9MF838641FF01EEI01J07FF078808001OF8003OF30CgQ0BE1KF83CF3EFERFDFF8JF831E03FE03FFD0818I07FFC6L01OFI03OF24CgL07C00C3ECJFC02CE3EFEUF0JF037E07DE0IFC881J0FF1CN0OFI03NFE06CgL0FC07831CF9FF80347IF8TF81FEFF007E0F9E0FEF388FJ0CF8O0OFI03NFE0F8gL0361C067EF1FDC4007FE7,OFEFBFFC1FEFF407F8F9E171F1C0F6I08FCI04K07MFEI03NFC0EgN0F180FDEF09DCE03FCE,OF3F0FFE1FE7FC07BC39E7E1FEC2E6I09FEI0EK07NFI03NF80EgN07I07ECF03F9F8CD8F,OF7C3FFE3FE7FE67BE39EFE7FEE0EE0019FEI0EK03NFI07NF80FJ08gH01FC0C3IF03787CCF9F,PFC7FFE7FF1FE7FB811KF7E1EC0031FEI06K01LFEFI03NF00F88gK03F8061FFBK0CDF3F8,TFEIF98F7F3811LFE38C00301EI06L0LFCFI03MFE01FECgK03K0210CJ0CFE3FC,YF1F8E3993LFEFJ021FCP07KF8FI01MFC01FEEgK06I02I01FK07E3D8,LFE3LFCJF1F8C39D37JF3EF80041FF8I07CK01KF8FI01MF001FCE01gI07I06J0FL0C3F8,FFE7FFE3LFDIFE070C1B803JF3IF1881FFJ05CL0KF86J0LFE003FFEgN0FE003CN03F8,KFDC03KF9IF6006813807FFCE7FF9D3C0EK064L03JF8603008KF8001IFgM01E6201EI01K07C,KF8681OFCC03C1100IFCJF831C1EK07M01JF8E07C0CKFI01IFgJ021C0FFE03FO03E,F7IF8601OF981FCB031FFBEFBFF81183EK07N07IF8607E0CJFCI01IFAgH01E1C07F3F13F8K0F03C,KF9E11LF9IF8DFCB633FF3FFBFFC1383EK07F02J03JF8407E07JFEI01IFEgI0E3DEFF3F00F8I0C0IF8,JFE7E1MF9IF9EE01603FF3KFC1F806K07F02J03KF407E83JFEI01FFECgI043DFFE3E01FC01I03FF,FFC7E7F9RFE401F07NFC0FC07100200F8K01LF07E7LF0010FFC8gJ03CFCE3E018003I01FF,FFC7E1ESFE603F8OFC0FC03F0E7007B1J03LF9OF8038FFCgM0F8E1E0EJ04I07E,3F83C186RFE6C7F9JF47IFC0381DF8FE1C7F3J07WF03CEFCgL01F0C1E1EI0446001C,1E23E3803QFE60JFBFF0JF803003F07C3C7BK07JFDKFE7IF0301C6FCgL01F18007FI024C866,063FF3841RF01IF1FEF1JF001003F03EF822K07IFEU03FFCgL01898I0EI03C0IF,8637F3003RF1BE7F0FE7JFE1J03FC7FF878K07IF8U07FFCCgM018I0E2006E07FF,0E77FE71BRF9FCF70FE7F7F7E1006077CIF1F8CJ03IFO07C37I03FFDFX06N018I0E2006601FF,1DF31870BTF9F22FF7E7E3E380E0230FFE1F18J079FF0SFI0JF8P04CS060CM0F7001F88,3FF380F9BTF3F23IFE7E1E100E00209FCFF18J070FE1SF863FFDFQ04ES0E0CM0FF001FDC,IF381TF9KF9JF7FFEI0E043001CFF08CI020FE3SF87IFDER06R03E3E0010300FE007FEC2BFFE01TF8KF9FFDKF061E0C703C0FF00EJ03FE7SFC7IFDFO08U03E270070F8878037FE42IFC01LF7LF79IF9F9FF8KF331F0CD03C0FF01EJ01FE7SFC4EJFR02R07E030390F80C07379E3CJFE3LF7LF79IF9F0FFC7IFE130F99C100IF81EJ01FE7SFE6FF7FEgK0EFL078I07798FF6JFE3SF7JF9F0FFC7FCFE318F806001FDFC1EJ01FETFE4FE3FEgJ0107L07I01FF9IFEFFDFE1XFBF0FFE7FDC630C1006019E078L01FETFE2FE3FEQ04R03060018L01E1JFEFF9gIF8FFE7FFE06J040011C038L01FETFE7E73FFEgI0206J01J060D9FF8E2gHFEIFDJFDFF82J04003F83BCL01FE7SFC7C73FFE8K08080C2Q0202J01I08200IF8E69IF8SFBIFE7MF8JFC73CI071FBE8L017E7SFC7FF3FFEK08808T0202J0180082003FFC7E9IF8QFC79IFE7KF9F1C1FFCFFCI060F9EK01017E7SFCIF3FE2K01W02M0C0080041FFE7CCIFBLFBKFBJFELF1C7C0JFBCK0F9FN07E7SFCKFEO0A004X0F98060080F8E7E8IFBgJF1C7DEIFE1E01I0FDBM017C7SFC7JFE08M0B07CX0C79BFJ078C7E8IFBVFEMF1DF8KF0E07I0F9BN07C7SFC7FF9FF08004I01B86g073FF8I03887E8IF87UFEKFE78FF8FE7FF663FI07988M07C7SFC7FF3BF8I07I01B8Cg0F3FFEJ09CFEC7FF87QF3PF607IFC7FF10FJ07C0C06601007C7SFCLFCI070410F88EX07C6F7EJ01FFE07FFC7PFE3FF7MFE07IFEFF818EJ0FC700E6J03C7SFCLFCK0C10303EX038663EJ07FFE07FFE7PFE7NFCFE07LF8F98J0FEC01E7J03C3SFCLF8K0C00107EV08038640F8003F7FE07CCF7IFBJF39PFCNF7JF8001F7800F7B8I07C3SFCJFEF8J03800187CV08038C00C866E018E07FEF3DFE7JF99FE7FF3RFE07JF9E3FF80C63BCI07C3SFC10FFE7K019001866V0803CK046600C61D7E638MF9DFE7FE1SF07C3FF9E7FFE1C013EI03C3SFC70JFK038F0187F02V07CK0C6600FE387C6300KF38DEIFE3SF87F1FFBKFDC00FFI01C3SFC787IF8J03220397F8W01CC0C80E4620FE301E2101KF3DF6XF87FF3KFE70879FF8001C3SFC787IFCJ0E200717FCX0F83F81EI0FFC361F2003FF7JFD5XF8IF37KFE08JFC001E3SFC3C3IFCJ0C0E071FDE008T01D071C7E031EFEFE0E00CCFE3JFDgGFE00LFC03JFC80023SFC1E7FFE7010181C0F0FE603U019871FFE7F3FFEFC0C4I05F3gMF03LFE3KFCE0023SFC07IFE301C18100IFE402T03018F9KF3FFEFC4C0A011IFE7BMF7VF7MF3KFC7I03SFC03IFE301E3I011IF802T010FF3IFDFF90FCFCJ0419QF3F7gIFBLFC3I03SFC007IF100EL07FFCC48S0F7FF1BKF807CFF6010E187RF7RF9WFC3C003SFC007FF3101CJ03E0FFE10CS0A7FF31FFEFF80FEFFE3007107YFBKFBFE3EPFDFFE1E003SFC003FF1383CJ03E07FE1V030FF3F8IF1FFEFFEI03F0gF1MF63QFDFFE0F043SFCI0FF9F81801801E07F82V0F1FF7F83FF9FFEFFE0800E1EYF9gJF07983SFCI03FDFC7E03801C07F9FV0F3FF7F18639EFEFC00C6071gFDgJF03B03SFCI01IFE7FE7003867IFV0IFEEFFC001FFEFC7J011hKF01F03SFCJ0FFE61E0300F867IFBT01FADJFC0611FCIF0B09023hJF01F83SFC02003F861EI01F077F878T01D3KFC7E184,IF8A03061hJF007E3SFC03C03F8E1EI01E077F87K01Q03KF9FF3872IF0101020hJF807E3SFC03C07FF6100C01C0E7FC703I01M04I03KFBF838FEFFE05F3I07QFDgQF803E3SFC07E47JF07C01C067FC78308S031IFCF0030C6FFE0C7F0087QFCgNFEFFC01E3KF00DKFC03FBKFCF801E067FC7808CI04O060IF8C100C06FFE7E7F0187QFC7gMFEFFC00E3IFEJ03JFC03OF801F637FCF80CT021FF098781806JF37FE18PFEFE6gPFC0063IFM0IFC03OFC007C07F830C4T033FF07C78183EJF1F8FF9EIFDKFEFFEKF3gJFCI03FFCO01C03PFC03C07F839C6R0707F8F87FFC00FEIFE3F87FB8IFDOF3JF3IFBgFEI03FF8P0803QF01807FDFF86R0F07F1FC7FFC067EJFBF87FF87FFDJFEJF1FE3F3FFE3YFBEI03FF8R03QF8I07F83C06004O0603E1FC3BFC0406IFE1C83FF87MF3JF0FE1JFC7gFEI03FF8R01QFCJ038380ER0601E0FC7BF80D86IFC0F87FE0NF1JF0FF9JFCgF3EI03FF8J03M01QFCQ08R01E03F36300FFEJF87CDF03NF3JF3gMFE7EI03FF8J078L03QFT01L08I01C03F120047FEJFC7F87CNFE3gUFI03FF80803FEL03QFS0818J0180061C03FBB8047FEFFEFEFD87WF3JF7gHFJ03FFC7867FFL07PFEO01FF8C18J01I030C03FDF00C7FEMF8WFE1FFD9IFDXFEJ03JF8KFK07PFCO03IF8P030C037CF03800ELFC9E3UFE1FFBBF3F8UFDFFEJ03PFCJ03PF8O07IF8P0386001878F801EC1JF9FF0TF9F1KF3F1TFC1IF18003QF00183PF8O0JFCO06386J03F783FE87JFB7F0RFE31F0LFE1TFC07IF8003QF913C1PF8N03JFCJ06J0E10080021FE1FFE3IF9FE3DC3QFE1078gIF07FF7C003TFC0PFO07JFEJ0400600100EC1E02203FEJF63E7FFBQFE103LF7FF9TF87FEFC003TFE07OFO07KFM0F01900301FE0387FEFE79F3WF383LF9FFDTFCJFC003UF03NFEO0LF81K07A1F00101FF011FFEFC79IF9KFEPF87LF9NFESFC003UF81NFEN01LF8L022138J0FF803FEEFC79IF9KFE7FEMF8LF83NFENFC2IFC003UF80NFCN03LFCK0400138J0FF803FEEF6LF7EJFBOFCLF07WFC2IFC001UFE07MFCN07LFE4J040083D2006F1C03FFEF7LF3CJFBJF7gPFC3IFC001VF83MFCN07MFN0C3F001DC1C003FENF3DIFC3IFE3gHFCMFE3IFEI0VFC1MFCN0NFK03I027003CCJ03FE7MF39F6FC3IFC3FFDXF9ERFEI03UFC07LFCN0NF900C7E0100318388008003E7NF0FEFC7IFE0FF9NFCOF1TFL0SFE03LF8M01NFC0027C07807F8009918001EOF8FEF2KF07F1MFDPFESFCN0QFE01LF9M01NFC040E00780FD80019F02,OFCFFE0IF8706F1MF9PFE3RFQ0PF00MF8L03NFE8E0420F81FD8003FF8E,RFE07FFCF9FC3YF1QFEQ03OF807LF8L03OF9F07FC781FFDE03IFE0FESF03LFCPF3OF1QFCQ01OF803MF78J07OF9F87FC7007FDE02IF81FELFCFEJF03EKFCF9VFE107PFCQ01OFC01NFEI027OFBFC0CF71EFF3FF07FD83EELFCFF1JFDJF3C3FD7IFDQF81CJF3LFCQ03OFE00OFI02PF9FE08FF1LF07E187FEOF1JFC0F7E313XFBLF3LF8Q07PF007NFC002PF9FEF83EJF7FF0FC1C3FEOF9JFC067C77gLFELF8Q0QF807NFE003PF9FDF83EJF3JFEF813EQFCIFC3BgVFCJ0FK01QF803OF803PFCJF3KF7FFDE0F8D1EKFE3JFC3FFC3DgVFCI0IF8I03QFC03OFC1BPFCIFE3JFE7FBDDFB8FFEKFE3JFC1FFC3DgMFE3MFE00LF80RFE01OFE3UFE7JFEFF7IFB87FEOFE7C1FFCgIF3FDIFE7NF00LFC3KFDLFE21OFC3UFE7JFCDE7C7FF83FEOFE78187gIF87KFE7NFE3gGFE1OF829QF7IF7FE7CB1E7C7FC01FEQF8387gHFCFF3gPF8J03FE9OF801SF7EFE67FF3FFC3FE003,QFEF8gIF8FF7gPFCK0FF9OFCBRF83FEFFC7KFE3FF203CgWFDgTFK03F8QFBQF83EIFC7LF3F7I3EhXFBSF8J01F8QF3QFCD8LFE7IF8E73F3EhXF9SFEK0F0QF7SF8LFC7FE3BEJFEhXFBTF8J0707gJFDKFBE7DE1JFE7EQFEgQFETF1UFJ0107PF7YFBIFEKFE7EQFEhKF807IF87OF8K03gTF3F3IFE7EhVFN01OFCK03gTF3F3KFEhUFCO07OF8J03gJF7NFE7F3KFEgJF9gPF8O03PFJ01gSFE7IF8EFE6gIF79EgOFQ07OFCJ0gWFB07FFEgIF63EgOFO01F7OFEJ0gVFE703FFEgIFE7DgNFEO03FDPFJ0gRFDJF207FFEgIFCgPFEO07FFEOF8I07gIFEMF9JF70IFEhTFEO0SFEI07gMF7MFEKFEgKF9gOFN01SFEI03gUFC7JFEgJF383gNFN03TFI03gTFC07IFE,gJF73gOF8M07TF8001gTFCCJF02gIFC7gPF800IFC0LFE1MF8001gUFDCIF06gIFCgQFC00JF1LFE0MFCI0gNF8MFCJFEiPF0MFCI0gMFE8MFDJFEiPF80LFCI0gMF1NFCC7FFEiPFC03KFEI07gKFE1NFE03FF8iQF80KFEI07gKF8SF3EiQFC038JFI07gKFDSF8EhXFBSF8003IF8003hFEhXF9TF81BIF8003gMF7KF7LFEhXF9TFC1JF8003gLFE7KF7LFEhXF9UF9JFC001gKFD8SFEhXF9UFCDIFCI0gLF8SFE3hWFBUFE4FFDCI0gNF9QFE1hWFBVFEFF8CI07gMF3QFE9QFDDNFE03hSFK07gMF3KF7KFERF89OF01hSF8J03gMF7QFERF1DiJFCJ01gTFDJFERF9DiJFEJ01gYFERF9hTFEQFK0gSF9KFERFBiLFK0gRFE1KFEgHFDhVFK07gQFC7KFEiIFC3LFC003F9FF8J07gXFEiGF8F03FBJFJ039FFEJ03gSF7JFEgJFDgVF0403JFM093FEJ03gRFE7JFEiFEI03IFEM081FFCI01gRFE7JFEiFCI03FDFEM081FFCJ0gSF7JFEiF8I07JF001CI081FFK0gXFEiF8I03IFE003FC0081FFK07gKFEF3OFERF13hLF8I07JF1FBFFJ0FF78I07gKF8E9OFERF33hLF8I07NFCJ0IFCI03gKF8CCFFELFEQFE73hLFCI0OFC0103IFCI03gLFCIFCLFEQFEE37hKFEI0OFCI07IFCI01gLFCPFERFE7BhLF100PFI07IFCJ0gOF87LFERFE7iFE007JFJ07gNF8MFERFCiIF17JF2I03gNF1MFERFCiOF7I01gNF3MFEiPF7PFE8I01gVFEiPF9QFK0gVFEiPFDQFK07gUFEjHF8J03gUFEFF9KFBYF3hHF3QFJ01gUFEFB8KF1iHF3QFK0gHF9RFEF3KFE03iSFK0gHF1BQFEF3JF8003iRFEK07gGF1BQFEKF8I013BDQFE3hKFEQFCJ03gGF3RFEKFK01BDQFE31hVFEJ01gGF7RFEKFL039F7PF7DFF3hHF9QFK0gTFEKFL039C5SFE7hHFDQF8J07gSFEF7FDFL01BDCQF183hUFCJ03gSFEF9FDF8K01FDC7BNF00C3hIFERFJ01gSFEF9FCFCL020C7BMFE00E3gSFE3C3LFENFEIFJ01gSFEF1FCFCI01K07BMFE0073EgMFE1FF80383FE07IF1MFE7F4K0gSFEF3FBFCO07BLF68007BgNFC07F047C3FF0IF77MFC3FL07gRFEF0F0FCO07BLF7C00E3gLFC18F3F3C7C7FF9FFE7DMFC3FL03gRFEF800FCO073MFC00C3MFEVF9F819F9FFC7C7FF9FFE7NFEN01gRFEF800F8O073DLF98007MFCVF1F011F9FFC7C7FF9FFE7OFN01gRFEB800F8O073DDKF9C017MFCTF8F3E313FCFFC7C7FF9FFC7OF8N0gRFE980078O073FCKF1E017MFERFE18E3E303FCFFC7C7FF9FFC3OFCN07gHFENFEB8007CO07BF83JF0E013gFE39E3C703FCFFC7C7FF9FFC3OFEN03gQFEB8007CO073D017FFE6E9C1F7XFE39C7C703FC7FC7C7FF1FF83PFN03gQFEBI0FEO074E003FFE3FC407WFEFE39C7C703FC79CFC7FF1FF89PFN01gQFEBI07EO0FCE003FFE060407WFE7E39C7C703FE7FCFEIF3FF19PFO0gQFEFI07CN01F0E003IFK07WFE7E3987C307SF19PF8N07gOFE,FI03CN01E0E003IFK07WFC7E3987E33MF3BWFCN03gOF,FI03EN01F1CI0IF18I0FDVFC7E7907E7NF3BWFEN01gNFE,FI03EN01F1CI0IFK041VFC7E391YFDQF7N0gOF0EFI01EO0F18I0IF8L0E7TFC7E7BgFDDQFCM07gOFEFI01EO0708I0JF8K0E1TFC3E7FF79JFEFFCFCIF3JFDFDCCMFCM03gOFEF8001EO060CI0JFL0F8TF87IFE7FFC7FCFFCFC7FE3FEUFM03gOFEF8001EO070C001JFL070TF8FECJFBC7FCFFCFC7FE3FCUFN0gOF,F8001FO070C003E7FF1K0307UF6CJF347F8FFCFC7FE3F8FE7IF9NF8M07gMFC,F8001FO060401E6IF1M07SFE86FCF7E3E3F9FFCFC73E3F8FE7IF9FELF8M07gMFC,FJ0FO060401E0IF1M07SFC3FF8F7E363F1FFCFC73E3F8FE7IF1FEBKFCM03gLFBC,F8I0F8N06I01E3IFN07RFCDFCF8F7E373F3FF8787003F1FE7IF1FF9KFEM01gLFBE,F8I078N07I03E0FFC4M07RFBFBC70F3C6F1E7FF8703801E1FE3FFE3FF9LFN0gLF3F,F8I078N071C06007FC4038J07SF3BC71F3C67C8MFC01E0FE3E7C3FFDLFN07gJFE1FCFCI07CM03FFE8C007F1803CJ07SF3BC71F38CVFE1F007FFELF8M03gJF007EFC7007CM01IF7C007FI07CJ07SF3BC71E38gF80PFCM01gIFC007EIF303CM01JFC003FI0FFJ07RFE3BC73E3gGFE3JF3KFEN0gIF8307EIF383CM01JFC003FI0FFCI07RFE7983BgOFBKFE8M07gJF8FEFF8F83CJ0301KF8003DI0JF007RFE7987gPFDLFCM03gJFBFEFF8F83CJ07MF8003DI03IF807RFE71gRFCLFCM01gHF8IFEFF8E63EJ0NF8003D8023IFC07RFC79gRFELFEM01gGFE0IFEFF8C23EI07LFDFC001F867KF03RFC7gSFE7KFEN0gGFC07FFEFC8801E043PF203F8MFC3hNFBLFCM07gFC0IFEFD8001F007QF03FBMFE07hMF9NF8K03gF81IFEFFC003F007QF03LFE6FE07hMFDNFCK01gF07IFEFF8007F00OF7IF3KFE01hQFCNFCL0XFC38JFEFF001EF13OF3NFE407hQFC7MFCL07UFE383C3E7FEFF01IF9FFE7SFBFEC07hQFE3MF8L03UFE00E03IFEFE01IFDTF1FF9FFE07FE7hOF3MFCL01UFC01C07IFEFC01IFDEPFEFF3FF9F8E00FE3hOF3MFDCL0UFC01807IFEFF83IF88PFE9E7FF9IF807C7hOFANFCL07SFEE378001FFEFFCJF003OF09F7LF007hQFC7MFEL03TF7FF8030FFELFCI07MFE00F7IFCF6003hQFC7NFL01TF3FF03JFELFCI03MFE0045FCF002I0FFEhNFE7NF8L0TFBE00C7IFELFCI018LFEI03F8F807I0FFChOF7NFCL07SF800183IFELF8K03KFEI03F07CJ03FFC7hNFBOFL03SF800600IFELFM0JFE8I02807EJ03FFE7hNFDOF8K01SF800E003FFEKFE00CJ01IFEJ06007FJ01E7E7hNFDOFCL0SF801EI0FFELF00E1I01JFJ0307FCL01E7hXFEL07RF807CI03FELF80FF8001IFEI013EFEM01C7hXFEL03RFC0FCJ0FEMF0DFC001JFI010C781CK03C7hOF7OF8K01RFC1F84I03EMF9C3CI0IFEK0E08FCK07E7hYFCL0RFE1F0EJ0EKFD03CK07FFEK05C8F8K0FE7hYFEL07RF3F0CJ02KF803E22I0IFCK01D8N0EhPFDOFEL01RF7E,KF803E7F800IFCJ0211CM017hPFEPFCL0SFE,KF207E3F801IFEJ0613EM037hQF7OFEL07RFC0E,JFE21E03FC03JF8J023FI01D003EhQF3PFL01RFC0F2,KF63C01FC03JF07I023FI0EDF87hRFBPF8L0RF88F2,KFE38033803JFEJ067FFC0EFFC7iIFCL07QF9FF2,KFEI0E001KFC0019E7FFC077FCiJFCL01TF6,KFE001E001LF0FF9CJFC071E00iHFEM0TFE,KFE001E001IF1FEV0iIFM07TF81,LFDFFEJ038Y0iIFM01TFC1,JF8gP0iIF8M0UFE,gU0iIF1M03TFC,gU0iIF18L01TFE,gT01iJF8M0UFE,gT01iJF8M03TFE,gT01iJFCM01TFE,gT01iJFCN0TF4,gT03iKFN07SFE,gT03iKFN01TFCgT03iKFCM01TFEgT03hTFEPFCN0TFEgT03hTFEPFCN07SFEgT07iLFN03SFEgT07hTF3QF8M01SFEgT07hTFBQFCN0SFEgT07hTF9RFN07RFEgT07hTFCRFN03RFEgT07hTFERF8M01RFEgT07hTFERFCM01RFEgT0iNFC0038J0RFEgT0iNFE003FEI07QFEgT0iOF007FEI03QFEgT0hVFDRF807FE0083QFEgT0iOFC0FFEEF01QFEgS01iOFE0IFE341QFEgS01iPFC37FFC80QFEgS01iQF3JFD0QFEgS03iQF8KF87PFEgS03iQF8KF93PFEgS03iWF91PFEgS07iWF91PFEgS07iXF1PFEgS07iXFDPFEgS07jOFE::gS0jPFE::::gS07jOFE:gS03jOFEgT0jOFEgT07jNFEgT03jNFEgU0jNFEgU03jMFEgV0jMFEgV03jLFEgW07jKFEgX07jJFEgX01jJFEgY07jIFEgY01jIFEh07jHFEhG0jHFChG03jGFChH07jFEhH01jFEhI0jFEhI07iYFE:hI06iYFEhI07iYFEhI07AiXFEhJ0AiXFEhJ03iXFEhJ02iXFEhJ02iOFE3ELFEhJ0BiOFE38LFEhJ02iOFE78LF8hJ07iQFCLF8hJ07iQFCLFEhJ07iQFELFEhJ07iXFE::::hJ0iYFEhJ07iXFE:hJ0iYFE:hJ0E7iWFEhI01iYFE:::hI03iYFE::::::hI037iXFEhI017iXFE:hJ07iRFEKFEhJ0iSFCKFEhJ0iSF18JFEhJ0iRFE30JFEhI03iTF0JFEhI03iTF8JFEhI03iTF84006EhI03iTFEJ0EhI03iUF8I06hI03iUF8,::hI03iWFC,hI03iXF8,hI07iXFCEhI03iYFE:hI03iPF9NFEhI03iPF1NFEhI07iOFC7NFEhI0iPFC7NF,hI07iOF93NF8hI07iOF13NFEhJ0iNFE3OFEhJ0iNFC4OFEhJ0BiMFC1OFEhI01BiMF817NFE^FS


^XZ`;
const zplCodeOne = `^XA
^LH0,0
^CI28
^FO260,25^A@N,20,20,E:TT0003M_.FNT^FPR^FDعربي : ra^FS
^FO260,54^PA0,1,1,1^A@N,20,20,E:TT0003M_.FNT^FDعربي : ar^FS
^XZ`;

const zplCodeTwo = `^XA
^LH0,0
^CI28
^FO260,25^A@N,20,20,E:SIMTT0003M_.FNT^FDعربي : ra^FS
^FO260,54^A@N,20,20,E:SIMTT0003M_.FNT^FDعربي : ar^FS
^XZ`;

const zplCodeThree = `^XA
^CI28
^CWZ,E:TT0003M_.TTF

^FT260,25^PA0,1,1,1^AZN,40^FDعربي : ar^FS
^FT260,54^PA0,1,1,1^AZN,40^FDعربي : ar^FS
^XZ`;


const zplCodeFour = `^XA
^CI28
^CWZ,E:TT0003M_.FNT
^FT260,25^PA0,1,1,1^AZN,40^FDعربي : ar^FS
^FT260,54^PA0,1,1,1^AZN,40^FDعربي : ar^FS
^XZ`;

const App = () => {

  const [isOldWay, setIsOldWay] = useState(true);
  const handleSwitcher = () => setIsOldWay(!isOldWay);

  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-xl mt-52">
      <h1 className='p-10 pt-4 font-bold text-center '>Infinity | print-sticker V2</h1>
      <div className="p-8">
        <Switcher label={isOldWay ? 'Old Way' : 'New Way'} checked={isOldWay} onChange={handleSwitcher} />

        <div className="mt-4">
          {isOldWay ? (
            <OldWay
              forImage={forImage}
              zplCodeOne={zplCodeOne}
              zplCodeTwo={zplCodeTwo}
              zplCodeThree={zplCodeThree}
              zplCodeFour={zplCodeFour}
            />
          ) : (
            <NewWay
              forImage={forImage}
              zplCodeOne={zplCodeOne}
              zplCodeTwo={zplCodeTwo}
              zplCodeThree={zplCodeThree}
              zplCodeFour={zplCodeFour}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;




/* 

    const zplCodeOne = `^XA
    ^LH0,0
    ^CI28
    ^FO260,25^A@N,20,20,E:TT0003M_.FNT^FDالاسم^FS
    ^FO260,54^APN,20^FDG: 1000^FS
    ^FO466,81^A@N,20,20,E:TT0003M_.FNT^FDI-Nالاسم^FS
    ^XZ`;
    const zplCodeTwo = `^XA
    ^FO250,20^A@N,30,30,E:TT0003M_.FNT^FDمرحبا^FS
    ^FO250,80^A@N,30,30^FDHello^FS
    ^XZ`;

    const zplCodeThree = `^XA
    ^CI28
    ^FO250,20^A@N,30,30,E:TT0003M_.FNT^FDمرحبا^FS
    ^FO250,80^A@N,30,30^FDHello^FS
    ^XZ`;

    const zplCodeFour = `^XA
    ^CI28
    ^CWZ,E:TT0003M_.TTF
    ^FT250,20^PA0,1,1,1^AZN,40^FDFDمرحبا^FS
    ^XZ`;

*/