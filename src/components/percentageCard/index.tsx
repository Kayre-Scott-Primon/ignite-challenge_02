import {  
    Subtitle,
    ArrowExpand,
    ArrowCompress, 
    PercentsLabel, 
    ContainerExpand, 
    ContainerCompress,
    StatusBarCompress, 
} from "./styles";

export function PercentageCard(){ 

    const expand = true;

    return (
        <>
            {expand ? 
                <ContainerExpand>
                    <ArrowExpand/>
                    <PercentsLabel>90,86%</PercentsLabel>
                    <Subtitle>das refeições dentro da dieta</Subtitle>
                </ContainerExpand>
                : 
                <ContainerCompress>
                    <StatusBarCompress/>
                    <ArrowCompress/>
                    <PercentsLabel>90,86%</PercentsLabel>
                    <Subtitle>das refeições dentro da dieta</Subtitle>
                </ContainerCompress>
            }
        </>
    )
}